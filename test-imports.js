// Test file to verify module resolution
const { useForm } = require('react-hook-form');
const { yupResolver } = require('@hookform/resolvers/yup');
const yup = require('yup');

console.log('useForm:', typeof useForm);
console.log('yupResolver:', typeof yupResolver);
console.log('yup:', typeof yup);
