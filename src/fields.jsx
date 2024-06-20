
export const fields = [
    {
        type: 'text',
        label: 'adınız',
        name: 'name'
    },
    {
        type: 'text',
        label: 'soyadınız',
        name: 'surname'
    },
    {
        type: 'select',
        label: 'cinsiyyətiniz',
        name: 'gender',
        options: [
            { key: 0, value: 'Kişi' },
            { key: 1, value: 'Qadın' }
        ]
    },
    {
        type: 'file',
        name:'image'
    },
    {
        type: 'textarea',
        label: 'Haqqınızda',
        name: 'about'
    }

]