import BannerCard from '../src/components/home/BannerCard';
import BenefitCard from '../src/components/home/BenefitCard';
import DescriptionContent from '../src/components/home/DescriptionContent';
import HomeHeaderImages from '../src/components/home/header/HomeHeaderImages';
import HomeHeaderTitle from '../src/components/home/header/HomeHeaderTitle';
import MenuHeaderImages from '../src/components/home/header/MenuHeaderImages';
import MenuHeaderTitle from '../src/components/home/header/MenuHeaderTitle';
import BenefitsSectionContainer from '../src/components/home/views/BenefitsSectionContainer';
import HeaderSectionContainer from '../src/components/home/views/HeaderSectionContainer';
import SplitSectionContainer from '../src/components/home/views/SplitSectionContainer';

import ContactSectionContainer from '../src/components/home/views/ContactSectionContainer';
import SliderSectionContainer from '../src/components/home/views/SliderSectionContainer';
import MapCard from '../src/components/home/MapCard';
import RestaurantContent from '../src/components/home/RestaurantContent';
import Footer from '../src/components/footer';

export default function Home() {
  return (
    <div className="">
      <div className="py-0">
        <HeaderSectionContainer
          leftContent={<HomeHeaderTitle />}
          rightContent={<HomeHeaderImages />}
        />

        <SplitSectionContainer
          bigContent={<BannerCard />}
          smallContent={<DescriptionContent />}
        />
        <SplitSectionContainer
          revert
          bigContent={<MapCard />}
          smallContent={<RestaurantContent />}
        />
        <SliderSectionContainer />
        <ContactSectionContainer />
        <BenefitsSectionContainer />
        <Footer/>
      
      </div>
    </div>
  );
}
