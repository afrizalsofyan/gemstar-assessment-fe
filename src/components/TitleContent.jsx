const TitleContent = ({ title, subtitle }) => {
  return (
    <div className='mb-6 text-center sm:text-left'>
      <h2 className='font-bold text-xl text-black-text'>{title}</h2>
      <span className='text-sm'>{subtitle}</span>
    </div>
  )
}

export default TitleContent