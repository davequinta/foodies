import MenuHeaderImages from '../src/components/home/header/MenuHeaderImages';
import MenuHeaderTitle from '../src/components/home/header/MenuHeaderTitle';
import HeaderSectionContainer from '../src/components/home/views/HeaderSectionContainer';
import MenuSectionContainer from '../src/components/home/views/MenuSectionContainer';

import MenuNavbar from '../src/components/MenuNavbar';
import Footer from '../src/components/footer';

export default function Menu() {
  return (
    <div className="w-screen  h-screen">
      <MenuNavbar />
      <HeaderSectionContainer
        leftContent={<MenuHeaderTitle />}
        rightContent={<MenuHeaderImages />}
        menu
      />
      <MenuSectionContainer />
            <Footer/>

    </div>
  );
}
