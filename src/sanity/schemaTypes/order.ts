import { defineType, defineField } from "sanity";

export default {
  name: 'order',
  type: 'document',
  title: 'Order',
  fields: [
    {
      name: 'firstName',
      title: 'First Name',
      type: 'string',
    },
    {
      name: 'lastName',
      title: 'Last Name',
      type: 'string',
    },
    {
      name: 'address',
      title: 'Address',
      type: 'string',
    },
    {
      name: 'city',
      title: 'City',
      type: 'string',
    },
    {
      name: 'zipCode',
      title: 'Zip Code',
      type: 'string',
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'cartItems',
      title: 'Cart Items',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'product' } }],
    },
    {
      name: 'total',
      title: 'Total',
      type: 'number',
    },
    {
      name: 'status',
      title: 'Order Status',
      type: 'string',
      options: {
        list: [
          { title: 'Pending', value: 'pending' },
          { title: 'Dispatched', value: 'dispatch' },
          { title: 'Success', value: 'success' },
        ],
        layout: 'radio',
      },
      initialValue: 'pending',
    },
    {
      name: 'orderDate',
      title: 'Order Date',
      type: 'datetime',

    },
    {
      name: 'discount',
      title: 'Discount',
      type: 'number',
      initialValue: 0,
    },
  ],
};






























