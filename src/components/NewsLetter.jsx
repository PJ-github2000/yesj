import { Text, Title, TextInput, Button, Image } from '@mantine/core';
import classes from './newsletter.module.css';
import { colors } from '../themes/colors';
export const Search = ()=>{
  return (
    <div className={classes.controls} >
        <TextInput
          placeholder="Your email"
          classNames={{ input: classes.input, root: classes.inputWrapper }}
        />
        <Button size='sm' className={classes.control}>Subscribe</Button>
      </div>
  )
}
export function NewsLetter() {

  return (
    <div className={classes.wrapper}>
      <div className={classes.body}>
        <Title fw={1000} fs="lg" mb={5} style={{color:`${colors.titleColor}`}}  className={classes.heading}>
        BECOME A VOLUNTEER
        </Title>
        <Text fz="sm" >
        Our Voluntary Immersion Programme enables you to challenge yourself, experience another culture and develop an attitude of being grateful.
        </Text>
<Text fw={900} fz={'lg'} my={10} 
>Come and immerse yourself to change your world.</Text>
        <Search />
      </div>
      <Image src={'https://yesj.org/assets/images/pl-3.jpg'} alt='image' className={classes.image} />
    </div>
  );
}
export default NewsLetter;