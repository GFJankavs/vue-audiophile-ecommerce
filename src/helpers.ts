import type { CheckoutFormData } from './types'

export const numberWithCommas = (x: number) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

export const formatName = (name: string) => {
  let formattedName = name.trim()

  formattedName = formattedName.replace('Headphones', '')
  formattedName = formattedName.replace('Earphones', '')
  formattedName = formattedName.replace('Speaker', '')
  formattedName = formattedName.replace('Wireless', '')

  formattedName = formattedName.replace('Mark I', 'MK I')
  formattedName = formattedName.replace('Mark II', 'MK II')

  formattedName = formattedName.trim()

  return formattedName
}

export const checkIfEveryInputFilled = (data: CheckoutFormData) => {
  let error: { input: string; msg: string } | null = null

  if (!data.name) {
    error = { input: 'name', msg: 'Name is required' }
    return error
  }

  if (!data.email) {
    error = { input: 'email', msg: 'Email is required' }
    return error
  }

  if (!data.phone) {
    error = { input: 'phone', msg: 'Phone is required' }
    return error
  }

  if (!data.address) {
    error = { input: 'address', msg: 'Address is required' }
    return error
  }

  if (!data.zip) {
    error = { input: 'zip', msg: 'ZIP is required' }
    return error
  }

  if (!data.city) {
    error = { input: 'city', msg: 'City is required' }
    return error
  }

  if (!data.country.name) {
    error = { input: 'country', msg: 'Country is required' }
    return error
  }

  if (data.payment === 'money' && !data.eMoney.number) {
    error = { input: 'money_number', msg: 'Number is required' }
    return error
  }

  if (data.payment === 'money' && !data.eMoney.pin) {
    error = { input: 'money_pin', msg: 'PIN is required' }
    return error
  }

  return true
}
