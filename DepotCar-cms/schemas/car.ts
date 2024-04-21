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
            of: [{ type: 'image' }],
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
            type: 'string',
            validation: (Rule: { required: () => any; }) => Rule.required()
        },
        {
            name: 'CC',
            title: 'CC',
            type: 'string',
            validation: (Rule: { required: () => any; }) => Rule.required()
        },
        {
            name: 'TransmissionType',
            title: 'Transmission Type',
            type: 'string',
            validation: (Rule: { required: () => any; }) => Rule.required()
        },
        {
            name: 'Fuel',
            title: 'Fuel',
            type: 'string',
            validation: (Rule: { required: () => any; }) => Rule.required()
        },
        {
            name: 'Year',
            title: 'Year',
            type: 'string',
            validation: (Rule: { required: () => any; }) => Rule.required()
        },
        {
            name: 'Condition',
            title: 'Condition',
            type: 'string',
            validation: (Rule: { required: () => any; }) => Rule.required()
        }
    ]
};

export default car;
