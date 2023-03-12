import React from 'react';
import Tree from 'react-d3-tree';
import './index.css'

// example chart
const db_chart = {
    name: 'img.location',
    attributes: 'projection',
    children: [
      {
        name: 'match(passengers.pic, img.face) = True',
        attributes: 'natural_join',
        children: [
          {
            name: 'img',
            attributes: 'rename',
            children: [
              {
                name: 'virtual_surveillance_images',
                attributes: '',
                children: []
              },
            ],
          },
          {
            name: "name LIKE '\\%Peter Derr\\%' ⋀ datebirth'1982-06-05' ⋀ country='UK'",
            attributes: 'rename',
            children: [
              {
                name: 'passengers',
                attributes: '',
                children: []
              },
            ],
          },
        ],
      },
    ],
};

function operation_symbol(op_id) {
  let symbol = ""
  if (op_id === 'projection') {
    symbol = 'Π'
  } else if (op_id === 'natural_join') {
    symbol = '⋈'
  } else if (op_id === 'selection') {
    symbol = 'σ'
  } else if (op_id === 'rename') {
    symbol = 'ρ'
  };

  return symbol
}

// refer to:
// https://stackoverflow.com/questions/69416200/add-image-to-react-d3-tree-rendercustomnodeelement-attribute
const renderRectSvgNode = ({ nodeDatum, toggleNode, 
foreignObjectProps = {x:0, y:0, width:20, height:20} }) => (
    <React.Fragment>
        <g>
            <circle cx="0" cy="20" r="20" fill="white" onClick={toggleNode}/>
            <foreignObject {...foreignObjectProps}>
                <text fill="blue" strokeWidth="1" x="20" y='20'>
                    {operation_symbol(nodeDatum.attributes)}
                </text>
            </foreignObject>

            <text fill="blue" strokeWidth="1" x="20">
                {nodeDatum.name}
            </text>
                {/* {nodeDatum.attributes && (
            <text fill="green" x="20" dy="20" strokeWidth="1">
                Operation: {nodeDatum.attributes}
            </text>)} */}
        </g>
    </React.Fragment>
);

export const useCenteredTree = (defaultTranslate = { x: 0, y: 0 }) => {
  const [translate, setTranslate] = React.useState(defaultTranslate);
  const containerRef = React.useCallback((containerElem) => {
    if (containerElem !== null) {
      const { width, height } = containerElem.getBoundingClientRect();
      setTranslate({ x: width / 2, y: height / 2 });
    }
  }, []);
  return [translate, containerRef];
};

// component render function
export default function DatabaseTreeDisplay() {
  const [translate, containerRef] = useCenteredTree();
  
  return (
    <div style={{width: '100%', height: '100vh'}} ref={containerRef}>
      <Tree data={db_chart}
        translate={translate}
        orientation={"vertical"}
        allowForeignObjects
        renderCustomNodeElement={renderRectSvgNode}

        separation={{
          siblings: 2,
          nonSiblings: 2
        }}
      />
  </div>
  );
}