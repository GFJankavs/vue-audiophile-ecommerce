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
