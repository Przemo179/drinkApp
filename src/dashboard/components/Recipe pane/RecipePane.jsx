import * as React from 'react';
import { recipe } from '../Drink list/DrinksList';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';

// const Props ={
//     'visible': Boolean,
//     'data': recipe,
//     'closePanel': () => {}
// }

const RecipePane = ({visible, data, closePanel}) => {

    return (
        <SlidingPane
            className='sliding-pane'
            isOpen={visible}
            title={data && data.name ? data.name : 'did not catch title :('}
            width={window.innerWidth < 600 ? "100%" : "500px"}
            onRequestClose={closePanel}
        >
            <div className='xxx'>
                <div className='xxx__zdjecie'>
                    <img src={data && data.photo ? data.photo : 'there is not photo'}/>
                </div>
                <div className='xxx__skladniki'>
                    <div className='xxx__skladniki--box'>
                        {/* TRZEBA PAMIĘTAĆ, ŻEBY SPRAWDZAĆ CZY AKTUALNIE ISTNIEJĄ TE RZECZY!!
                        <div> {data skladniki mapować} 
                        </div> */}
                        {/* 
                        <div> { data proporocje odpowiednie} 
                        </div>*/}
                        {/* <div> {data przepis}
                        </div>*/}
                    </div>
                </div>
            </div>

        </SlidingPane>
    )
}

export default RecipePane;