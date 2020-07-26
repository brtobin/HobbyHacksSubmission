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
                            <input class="form-control" type="text" placeholder="Estimated Time of Travel"/>
                                <div id="dropdown-instr">Include these genres:</div>
                            <div class="form-group row">   
                                <div class="col-4">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="gridCheck1"/>
                                        <label class="form-check-label" for="gridCheck1">Hip Hop</label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="gridCheck1"/>
                                        <label class="form-check-label" for="gridCheck1">Pop</label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="gridCheck1"/>
                                        <label class="form-check-label" for="gridCheck1">Country</label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="gridCheck1"/>
                                        <label class="form-check-label" for="gridCheck1">Workout</label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="gridCheck1"/>
                                        <label class="form-check-label" for="gridCheck1">Latin</label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="gridCheck1"/>
                                        <label class="form-check-label" for="gridCheck1">Rock</label>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="gridCheck1"/>
                                        <label class="form-check-label" for="gridCheck1">R&B</label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="gridCheck1"/>
                                        <label class="form-check-label" for="gridCheck1">Black History is Now</label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="gridCheck1"/>
                                        <label class="form-check-label" for="gridCheck1">Gaming</label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="gridCheck1"/>
                                        <label class="form-check-label" for="gridCheck1">Alternative</label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="gridCheck1"/>
                                        <label class="form-check-label" for="gridCheck1">Focus</label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="gridCheck1"/>
                                        <label class="form-check-label" for="gridCheck1">Dance/Electronic</label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="gridCheck1"/>
                                        <label class="form-check-label" for="gridCheck1">Chill</label>
                                    </div>
                                </div>
                                <div class="col-4">
                                <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="gridCheck1"/>
                                        <label class="form-check-label" for="gridCheck1">Indie</label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="gridCheck1"/>
                                        <label class="form-check-label" for="gridCheck1">Christian</label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="gridCheck1"/>
                                        <label class="form-check-label" for="gridCheck1">Decades</label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="gridCheck1"/>
                                        <label class="form-check-label" for="gridCheck1">Wellness</label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="gridCheck1"/>
                                        <label class="form-check-label" for="gridCheck1">Pride</label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="gridCheck1"/>
                                        <label class="form-check-label" for="gridCheck1">Party</label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="gridCheck1"/>
                                        <label class="form-check-label" for="gridCheck1">Sleep</label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="gridCheck1"/>
                                        <label class="form-check-label" for="gridCheck1">Classical</label>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-sm-10">
                                    <button type="submit" class="btn btn-primary">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div> 
        </div>   
    )
}

export default Other;