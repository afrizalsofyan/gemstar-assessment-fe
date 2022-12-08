const UserCarda = ({ imgSrc, name, jobRole }) => {
  return (
    <div className='flex flex-col gap-3'>
      <div>
        <img src={imgSrc} alt='img-user' />
      </div>
      <div className='flex flex-col capitalize'>
        <span className='font-bold text-base text-black-text'>{name}</span>
        <span className='font-normal text-sm text-black-text'>{jobRole}</span>
      </div>
    </div>
  )
}

export default UserCarda