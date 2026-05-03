import BreakingNews from '@/components/shared/BreakingNews';
import Hader from '@/components/shared/Hader';
import ReadingSection from '@/components/shared/ReadingSection';
import WhyChoose from '@/components/shared/WhyChoose';
import FeaturedBooks from '@/app/allcard/FeaturedBooks';

const page =  () => {

  // const res = await fetch("https://add-to-book-map8.vercel.app/book.json");
  // const data = await res.json();

  return (
    <>
      <Hader />
      {/* <BreakingNews /> */}

    
      {/* <FeaturedBooks  /> */}


      <WhyChoose />
      <ReadingSection />
    </>
  );
};

export default page;