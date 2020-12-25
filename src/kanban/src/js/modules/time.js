const time = () => {
  const data = new Date();
  const hour = data.getHours();
  const minutes = data.getMinutes();
  const seconds = data.getSeconds();

  return [hour, minutes, seconds]
}

export {time}