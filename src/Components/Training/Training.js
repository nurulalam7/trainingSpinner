
import React from 'react'

const Training = () => {
    return (
        <div id="register" class="form-1">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="text-comtainer">
                        <ul class="list-unstyled li-space-lg">
                            <li class="media">
                                <i class="fas fa-square"></i>
                                <div class="media-body"><strong>Your information</strong> is required to complete the registration</div>
                            </li>
                            <li class="media">
                                <i class="fas fa-square"></i>
                                <div class="media-body"><strong>It's safe with us</strong> and will not be used for marketing</div>
                            </li>
                            <li class="media">
                                <i class="fas fa-square"></i>
                                <div class="media-body"><strong>You will receive</strong> a confirmation email in less than 24h</div>
                            </li>
                        </ul>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-container">
                        <form id="registrationForm" data-toggle="validator" data-focus="false">
                            <div class="form-group">
                                <input type="text" class="form-control-input" id="rname" name="rname" required  />
                                <label class="label-control" for="rname">Your name</label>
                                <div class="help-block with-errors"></div>
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control-input" id="rname" name="rname" required />
                                <label class="label-control" for="rname">Father's name</label>
                                <div class="help-block with-errors"></div>
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control-input" id="rname" name="rname" required />
                                <label class="label-control" for="rname">Mother's name</label>
                                <div class="help-block with-errors"></div>
                            </div>
                            <div class="form-group">
                                <input type="email" class="form-control-input" id="remail" name="remail" required />
                                <label class="label-control" for="remail">Email address</label>
                                <div class="help-block with-errors"></div>
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control-input" id="rphone" name="rphone" required />
                                <label class="label-control" for="rphone">Phone number</label>
                                <div class="help-block with-errors"></div>
                            </div>
                            <div class="form-group">
                                <select class="form-control-input" required>
                                    <option>select Course</option>
                                    <option value="web-design">Web Design</option>
                                    <option>Web Development</option>
                                    <option>Seo</option>
                                    <option>App Development</option>
                                    <option>Graphics Design</option>
                                </select>
                                <div class="help-block with-errors"></div>
                            </div>
                            <div class="form-group">
                                <select class="form-control-input" required>
                                    <option>Course Type</option>
                                    <option value="online">Online</option>
                                    <option value="offline">Offline</option>
                                </select>
                                <div class="help-block with-errors"></div>
                            </div>
                            <div class="form-group">
                                <label style="padding-right: 20px; color: white;">Select Pyment system</label>
                                <input type="radio" name="payment" value="manual" style="padding-left: 30px;" />manual
                                <input type="radio" name="payment" value="online" />online payment
                                <div class="help-block with-errors"></div>
                            </div>
                            <div class="form-group">
                                <button type="submit" class="form-control-submit-button"><a target="_blank" style="text-decoration: none;" href="payment.html">REGISTER</a></button>
                            </div>
                            <div class="form-message">
                                <div id="rmsgSubmit" class="h3 text-center hidden"></div>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    )
}

export default Training
