import React from 'react';
import './profile.css';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import IconButton from '@material-ui/core/IconButton';

function Profile(){

   const handleSubmit = event => {
        event.preventDefault();
        alert('Thanks for building your profile!')
      }
     /*
       return(
         <div className="profCard__cardContainer"
         >
             <div
             style={{backgroundImage: `url(https://toppng.com/uploads/preview/stock-person-png-stock-photo-man-11563049686zqeb9zmqjd.png)`}}>
             <div className = "prof">
           <form onSubmit={handleSubmit}>
             <fieldset>
               <label>
                 <p>Name</p>
                 <input name="name" />
                 <p>Url</p>
                 <input url="url" />
               </label>

             </fieldset>
             <button type="submit">Submit<Button>

           </form>
           </div>
           </div>
         </div>
       )
     }*/
    
    return(
        <div className ="profCard__cardContainer">
            <div 
            style={{backgroundColor:`radial-gradient(
                ellipse at left bottom,
                rgb(110, 61, 224) 0%,
                rgba(119, 33, 231, 0.9) 59%,
                rgba(40, 72, 236, 0.9) 100%
              );`}}
            className = "prof"
            >
                <div className = "icon">
                    <IconButton>
                        <AddPhotoAlternateIcon fontSize="large" />
                    </IconButton>
                </div>
                <form onSubmit={handleSubmit}
                className ="form">
             <fieldset>
               <label>
                 <p>Enter Name</p>
                 <input name="name" />
               </label>

             </fieldset>
             <button type="submit">Submit</button>

           </form>
                
            </div>
        </div>
    )
}

export default Profile;