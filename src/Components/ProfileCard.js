function ProfileCard ({tilte,handle,image}){
    
    return(
    <div className="card">
        <div className="card-img">
            <figure className="image is-1by1">
            <img src={image} alt="pda logo" />
            </figure>
        </div>
        
        <div className="card-content">
            <div className="media-content">
                <p className="title is-4">{tilte}</p>
                <p className="subtitle is-6">{handle}</p>
            </div>
        </div>
        
    </div>   
    )
};

export default ProfileCard;
