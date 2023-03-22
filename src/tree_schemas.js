// example chart
const db_chart_1 = {
    name: 'img.location',
    attributes: 'projection',
    sensitive: true,
    children: [
      {
        name: 'match(passengers.pic, img.face) = True',
        attributes: 'natural_join',
        sensitive: true,
        children: [
          {
            name: 'img',
            attributes: 'rename',
            sensitive: true,
            children: [
              {
                name: 'virtual_surveillance_images',
                attributes: '',
                sensitive: true,
                children: []
              },
            ],
          },
          {
            name: "name LIKE '\\%Peter Derr\\%' ⋀ datebirth'1982-06-05' ⋀ country='UK'",
            attributes: 'selection',
            sensitive: false,
            children: [
              {
                name: 'passengers',
                attributes: '',
                sensitive: false,
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
  sensitive: true,
  children: [
    {
      name: 'match(passengers.pic, img.face) = True',
      attributes: 'natural_join',
      sensitive: true,
      children: [
        {
          name: 'img',
          attributes: 'rename',
          sensitive: true,
          children: [
            {
              name: 'virtual_surveillance_images',
              attributes: '',
              sensitive: true,
              children: []
            },
          ],
        },
        {
          name: "name LIKE '\\%Peter Derr\\%' ⋀ datebirth'1982-06-05' ⋀ country='UK'",
          attributes: 'selection',
          sensitive: false,
          children: [
            {
              name: 'passengers',
              attributes: '',
              sensitive: false,
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
  sensitive: true,
  children: [
    {
      name: "img.date = '2023-03-07'",
      attributes: 'selection',
      sensitive: true,
      children: [
        {
          name: 'match(passengers.pic, img.face) = True',
          attributes: 'natural_join',
          sensitive: true,
          children: [
            {
              name: 'img',
              attributes: 'rename',
              sensitive: true,
              children: [
                {
                  name: 'virtual_surveillance_images',
                  sensitive: true,
                  attributes: '',
                  children: []
                },
              ],
            },
            {
              name: "name LIKE '\\%Peter Derr\\%' ⋀ datebirth'1982-06-05' ⋀ country='UK'",
              attributes: 'selection',
              sensitive: false,
              children: [
                {
                  name: 'passengers',
                  attributes: '',
                  sensitive: false,
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