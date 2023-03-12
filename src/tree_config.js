import React from 'react';
import Tree from 'react-d3-tree';
import './index.css'

// example chart
const db_chart_1 = {
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
            attributes: 'selection',
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

const db_chart_2 = {
  name: 'img.date',
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
          attributes: 'selection',
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

const db_chart_3 = {
  name: 'img.location',
  attributes: 'projection',
  children: [
    {
      name: "img.date = '2023-03-07'",
      attributes: 'natural_join',
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
              attributes: 'selection',
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

function conditional_fill(nodeDatum) {
  if (nodeDatum.children.length !== 0) {
    return "beige"
  } else {
    return "#5CA904"
  };
}

// refer to:
// https://stackoverflow.com/questions/69416200/add-image-to-react-d3-tree-rendercustomnodeelement-attribute
const renderRectSvgNode = ({ nodeDatum, toggleNode}) => (
    <React.Fragment>
        <g onClick={toggleNode}>
            <circle cx="0" cy="20" r="20" fill={conditional_fill(nodeDatum)}/>

            {/* <foreignObject x='-20' y='0' width='40' height='40'> */}
            <text class='label' x="0em" y="1em" alignment-baseline="middle" position='fixed' text-anchor="middle">{operation_symbol(nodeDatum.attributes)}</text>      
            {/* </foreignObject> */}

            {/* <text class="force_wrap" fill="blue" strokeWidth="1" x="20">
                {nodeDatum.name}
            </text> */}

    <foreignObject width="250" height="200" x="25" y="25">
        <div class='wrap_break_box'>
            <span>{nodeDatum.name}</span>
        </div>
    </foreignObject>
        </g>
    </React.Fragment>
);

export const useCenteredTree = (defaultTranslate = { x: 0, y: 0 }) => {
  const [translate, setTranslate] = React.useState(defaultTranslate);
  const containerRef = React.useCallback((containerElem) => {
    if (containerElem !== null) {
      const { width, height } = containerElem.getBoundingClientRect();
      setTranslate({ x: width / 2, y: height / 4 });
    }
  }, []);
  return [translate, containerRef];
};

// component render function
export default function DatabaseTreeDisplay() {
  const [translate, containerRef] = useCenteredTree();
  
  return (
    <div style={{width: '100%', height: '100vh'}} ref={containerRef}>
      <Tree data={db_chart_3}
        translate={translate}
        orientation={"vertical"}
        allowForeignObjects
        renderCustomNodeElement={renderRectSvgNode}

        separation={{
          siblings: 2.5,
          nonSiblings: 2.5
        }}
      />
  </div>
  );
}