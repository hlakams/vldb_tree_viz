import React from 'react';
import Tree from 'react-d3-tree';

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

// component render function
export default function DatabaseTreeDisplay() {
  return (
    <div style={{width: '100%', height: '100vh'}}>
      <Tree data={db_chart}
        orientation={"vertical"}
        allowForeignObjects
        // nodeLabelComponent={{
        //   render: <CardSO />
        // }}
        // nodeSvgShape={svgSquare}
        // pathFunc="step"
        // translate={this.state.translate}
        // initialDepth={1}
        // nodeSize={{
        //   x: 240,
        //   y: 200
        // }}
        separation={{
          siblings: 2,
          nonSiblings: 2
        }}
      />
  </div>
  );
}