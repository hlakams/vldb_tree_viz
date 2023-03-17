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
      attributes: 'selection',
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

export {db_chart_1, db_chart_2, db_chart_3}