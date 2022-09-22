import Container from './Container';
import FashionCard from './FashionCard';
import Heading from './Heading';
import Pragraph from './Pragraph';
import Row from './Row';

const Blogs = () => {
  return (
    <section className='blogs'>
      <div className='blogs__background'>
        <div className='blogs__content'>
          <Heading classes='mb-md white'>Our Blogs</Heading>
          <Pragraph>
            It is easy way to create your beatiful blog for daily
          </Pragraph>
        </div>
      </div>
      <div className='blogs__padding'>
        <Container>
          <Row>
            <FashionCard
              imgCard='https://ik.imagekit.io/ievdkoh2e/foodzero/Feature_Image_hdY1hZua3.png?ik-sdk-version=javascript-1.4.3&updatedAt=1660863778696'
              headingText='Fruit and vegetables and protection against diseases'
              pragraphText='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
              name='Dianne Russell'
              date='October 17,2021'
              time='3:33 pm'
              comments='2 comments'
              linkText='Read More'
              userImg='https://ik.imagekit.io/ievdkoh2e/foodzero/Avatar__4__qGRo72Ex2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1660864033302'
            />
            <FashionCard
              imgCard='https://ik.imagekit.io/ievdkoh2e/foodzero/Feature_Image__1__1NJbNPzVG.png?ik-sdk-version=javascript-1.4.3&updatedAt=1660863778510'
              headingText='Fruit and vegetables and protection against diseases'
              pragraphText='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
              name='Dianne Russell'
              date='October 17,2021'
              time='3:33 pm'
              comments='2 comments'
              linkText='Read More'
              userImg='https://www14.0zz0.com/2022/04/08/20/370139054.png'
            />
            <FashionCard
              imgCard='https://ik.imagekit.io/ievdkoh2e/foodzero/Feature_Image__2__EsmajVLlM.png?ik-sdk-version=javascript-1.4.3&updatedAt=1660863778449'
              headingText='Fruit and vegetables and protection against diseases'
              pragraphText='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
              name='Dianne Russell'
              date='October 17,2021'
              time='3:33 pm'
              comments='2 comments'
              linkText='Read More'
              userImg='https://ik.imagekit.io/ievdkoh2e/foodzero/Avatar__3__p994Ry-Vj.png?ik-sdk-version=javascript-1.4.3&updatedAt=1660864033260'
            />
            <FashionCard
              imgCard='https://ik.imagekit.io/ievdkoh2e/foodzero/Feature_Image__3__W6qdRxcZL.png?ik-sdk-version=javascript-1.4.3&updatedAt=1660863778213'
              headingText='Fruit and vegetables and protection against diseases'
              pragraphText='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
              name='Dianne Russell'
              date='October 17,2021'
              time='3:33 pm'
              comments='2 comments'
              linkText='Read More'
              userImg='https://ik.imagekit.io/ievdkoh2e/foodzero/Avatar__2__W1XC97f8J.png?ik-sdk-version=javascript-1.4.3&updatedAt=1660864033207'
            />
            <FashionCard
              imgCard='https://ik.imagekit.io/ievdkoh2e/foodzero/Feature_Image__4__nyvmRo59n.png?ik-sdk-version=javascript-1.4.3&updatedAt=1660863778633'
              headingText='Fruit and vegetables and protection against diseases'
              pragraphText='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
              name='Dianne Russell'
              date='October 17,2021'
              time='3:33 pm'
              comments='2 comments'
              linkText='Read More'
              userImg='https://ik.imagekit.io/ievdkoh2e/foodzero/Avatar_sv7nbVhc4.png?ik-sdk-version=javascript-1.4.3&updatedAt=1660864033306'
            />
            <FashionCard
              imgCard='https://ik.imagekit.io/ievdkoh2e/foodzero/Feature_Image__5__BcONr74ib.png?ik-sdk-version=javascript-1.4.3&updatedAt=1660863778586'
              headingText='Fruit and vegetables and protection against diseases'
              pragraphText='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
              name='Dianne Russell'
              date='October 17,2021'
              time='3:33 pm'
              comments='2 comments'
              linkText='Read More'
              userImg='https://ik.imagekit.io/ievdkoh2e/foodzero/Avatar__1__ApJEdSns3.png?ik-sdk-version=javascript-1.4.3&updatedAt=1660864033293'
            />
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Blogs;
