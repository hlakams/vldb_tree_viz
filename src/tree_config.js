import React from 'react';
import Tree from 'react-d3-tree';
import './index.css'

// example chart
const db_chart = {
    name: 'guestName',
    attributes: {
      ops: ['division', 'projection']
    },
    children: [
      {
        name: 'hotelNo',
        attributes: {
          ops: ['projection']
        },
        children: [
          {
            name: "city='London'",
            attributes: {
              ops: ['selection'],
            },
          },
        ],
      },
      {
        name: 'guestname, hotelNo',
        attributes: {
          ops: 'projection',
        },
        children: [
          {
            name: 'B.guestNo',
            attributes: {
              ops: 'natural-join',
            },
          },
          {
            name: 'G.guestNo',
            attributes: {
              ops: 'natural-join'
            },
          }
        ],
      },
    ],
};

// refer to:
// https://stackoverflow.com/questions/69416200/add-image-to-react-d3-tree-rendercustomnodeelement-attribute
const renderRectSvgNode = ({ nodeDatum, toggleNode, 
foreignObjectProps = {} }) => (
    <React.Fragment>
        <foreignObject {...foreignObjectProps}>
            <img src={'../public/logo192.png'} height="200" width="200"/>
        </foreignObject>
        <g>
            <circle cx="0" cy="20" r="20" fill="white" onClick={toggleNode} />
            <text fill="blue" strokeWidth="1" x="20">
                {nodeDatum.name}
            </text>
                {nodeDatum.attributes?.department && (
            <text fill="green" x="20" dy="20" strokeWidth="1">
                Department: {nodeDatum.attributes}
            </text>)}
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