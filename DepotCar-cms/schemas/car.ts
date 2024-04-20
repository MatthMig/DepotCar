// schemas/car.ts


const car = {
    name: 'car',
    title: 'Car',
    type: 'document',
    fields: [
        {
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [{ type: 'string' }],
            validation: (Rule: { required: () => any; }) => Rule.required()
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule: { required: () => any; }) => Rule.required()
        },
        {
            name: 'oldPrice',
            title: 'Old Price',
            type: 'string'
        },
        {
            name: 'Price',
            title: 'Price',
            type: 'string',
            validation: (Rule: { required: () => any; }) => Rule.required()
        },
        {
            name: 'HorsePower',
            title: 'Horse Power',
            type: 'string'
        },
        {
            name: 'CC',
            title: 'CC',
            type: 'string'
        },
        {
            name: 'TransmissionType',
            title: 'Transmission Type',
            type: 'string'
        },
        {
            name: 'Fuel',
            title: 'Fuel',
            type: 'string'
        },
        {
            name: 'Year',
            title: 'Year',
            type: 'string'
        },
        {
            name: 'Condition',
            title: 'Condition',
            type: 'string'
        }
    ]
};

export default car;
