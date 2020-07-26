import React from 'react';

export const Other = () => {
    return(
        <div class="accordion" id="accordionExample">
                    <h2 class="mb-0">
                        <button className="btn btn-lg btn-primary btn-block default-primary-color" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" >By Genre
                        </button>
                    </h2>
                <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                    <div class="card-body">
                        <form>
                            
                        </form>
                    </div>
                </div> 
        </div>   
    )
}

export default Other;