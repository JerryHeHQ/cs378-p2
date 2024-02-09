import './App.css';
import MenuItem from './components/MenuItem';

import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.

// Menu data. An array of objects where each object represents a menu item. Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.
const menuItems = [
  {
    id: 1,
    title: 'Gyoza',
    description: 'Japanese dumplings',
    imageName: 'gyoza.png',
    price: 5.99,
  },
  {
    id: 2,
    title: 'Sushi',
    description: 'Japanese rice rolls',
    imageName: 'sushi.png',
    price: 6.99,
  },
  {
    id: 3,
    title: 'Ramen',
    description: 'Japanese noodle soup',
    imageName: 'ramen.png',
    price: 7.99,
  },
  {
    id: 4,
    title: 'Matcha Cake',
    description: 'Japanese green tea cake',
    imageName: 'matcha-cake.png',
    price: 4.99,
  },
  {
    id: 5,
    title: 'Mochi',
    description: 'Japanese rice cake',
    imageName: 'mochi.png',
    price: 3.99,
  },
  {
    id: 6,
    title: 'Yakitori',
    description: 'Japanese skewered chicken',
    imageName: 'yakitori.png',
    price: 2.99,
  },
  {
    id: 7,
    title: 'Takoyaki',
    description: 'Japanese octopus balls',
    imageName: 'takoyaki.png',
    price: 5.99,
  },
  {
    id: 8,
    title: 'Sashimi',
    description: 'Japanese raw fish',
    imageName: 'sashimi.png',
    price: 8.99,
  },
  {
    id: 9,
    title: 'Okonomiyaki',
    description: 'Japanese savory pancake',
    imageName: 'okonomiyaki.png',
    price: 6.99,
  },
  {
    id: 10,
    title: 'Katsu Curry',
    description: 'Japanese curry with fried pork',
    imageName: 'katsu-curry.png',
    price: 9.99,
  }
];


function App() {
  return (
    <div className='container'>
      <div className='row' id='main-row'>
        <div className='col d-flex flex-column align-items-center' id='main-col'>

          <div className='row' id='brand-row'>
            <div className='col-auto p-0' id='brand-logo-col'>
              <img src="logo192.png" id='brand-logo-img'></img>
            </div>
            <div className='col' id='brand-name-col'>
              B<span>RAND</span> N<span>AME</span>
            </div>
          </div>

          <div className='row' id='mottos-row'>
            <div className='col' id='mottos-col'>
              <div className='row' id='motto-1-row'>
                <div className='col' id='motto-1-col'>
                  Motto 1 Motto 1 Motto 1 Motto 1 Motto 1 Motto 1
                </div>
              </div>
              <div className='row' id='motto-2-row'>
                <div className='col' id='motto-2-col'>
                Motto 2 Motto 2 Motto 2
                </div>
              </div>
            </div>
          </div>

          <div className='row' id='items-row'>
            <div className='col' id='items-col'>
            <div className='row item-row'>
                <div className='col-auto p-0 item-picture-col'>
                  <img src='images\gyoza.png' className='item-picture-img'></img>
                </div>
                <div className='col item-info-col'>
                  <div className='row item-name-row'>
                    <div className='col item-name-col'>
                      Name
                    </div>
                  </div>
                  <div className='row item-description-row'>
                    <div className='col item-description-col'>
                      Description Description Description Description
                    </div>
                  </div>
                  <div className='row item-buy-row'>
                    <div className='col item-price-col'>
                      $10.25
                    </div>
                    <div className='col d-flex justify-content-end item-add-col'>
                      <button className='item-add-button' type='button'>
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='row item-row'>
                <div className='col-auto p-0 item-picture-col'>
                  <img src='images\gyoza.png' className='item-picture-img'></img>
                </div>
                <div className='col item-info-col'>
                  <div className='row item-name-row'>
                    <div className='col item-name-col'>
                      Name
                    </div>
                  </div>
                  <div className='row item-description-row'>
                    <div className='col item-description-col'>
                      Description Description Description Description
                    </div>
                  </div>
                  <div className='row item-buy-row'>
                    <div className='col item-price-col'>
                      Price
                    </div>
                    <div className='col d-flex justify-content-end item-add-col'>
                      <button className='item-add-button' type='button'>
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='row item-row'>
                <div className='col-auto p-0 item-picture-col'>
                  <img src='images\gyoza.png' className='item-picture-img'></img>
                </div>
                <div className='col item-info-col'>
                  <div className='row item-name-row'>
                    <div className='col item-name-col'>
                      Name
                    </div>
                  </div>
                  <div className='row item-description-row'>
                    <div className='col item-description-col'>
                      Description Description Description Description
                    </div>
                  </div>
                  <div className='row item-buy-row'>
                    <div className='col item-price-col'>
                      Price
                    </div>
                    <div className='col d-flex justify-content-end item-add-col'>
                      <button className='item-add-button' type='button'>
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='row item-row'>
                <div className='col-auto p-0 item-picture-col'>
                  <img src='images\gyoza.png' className='item-picture-img'></img>
                </div>
                <div className='col item-info-col'>
                  <div className='row item-name-row'>
                    <div className='col item-name-col'>
                      Name
                    </div>
                  </div>
                  <div className='row item-description-row'>
                    <div className='col item-description-col'>
                      Description Description Description Description
                    </div>
                  </div>
                  <div className='row item-buy-row'>
                    <div className='col item-price-col'>
                      Price
                    </div>
                    <div className='col d-flex justify-content-end item-add-col'>
                      <button className='item-add-button' type='button'>
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='row item-row'>
                <div className='col-auto p-0 item-picture-col'>
                  <img src='images\gyoza.png' className='item-picture-img'></img>
                </div>
                <div className='col item-info-col'>
                  <div className='row item-name-row'>
                    <div className='col item-name-col'>
                      Name
                    </div>
                  </div>
                  <div className='row item-description-row'>
                    <div className='col item-description-col'>
                      Description Description Description Description
                    </div>
                  </div>
                  <div className='row item-buy-row'>
                    <div className='col item-price-col'>
                      Price
                    </div>
                    <div className='col d-flex justify-content-end item-add-col'>
                      <button className='item-add-button' type='button'>
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='row item-row'>
                <div className='col-auto p-0 item-picture-col'>
                  <img src='images\gyoza.png' className='item-picture-img'></img>
                </div>
                <div className='col item-info-col'>
                  <div className='row item-name-row'>
                    <div className='col item-name-col'>
                      Name
                    </div>
                  </div>
                  <div className='row item-description-row'>
                    <div className='col item-description-col'>
                      Description Description Description Description
                    </div>
                  </div>
                  <div className='row item-buy-row'>
                    <div className='col item-price-col'>
                      Price
                    </div>
                    <div className='col d-flex justify-content-end item-add-col'>
                      <button className='item-add-button' type='button'>
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>


        </div>
      </div>







      {/* <h1>Menu</h1>
      <div className="menu">
        

        {menuItems.map((menuItem) => (
          <MenuItem title={menuItem.title}/>
        ))}
      </div> */}
    </div>
  );
}

export default App;
