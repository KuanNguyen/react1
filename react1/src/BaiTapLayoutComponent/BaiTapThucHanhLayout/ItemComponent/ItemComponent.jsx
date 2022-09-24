import React, { Component } from 'react'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'


export default class ItemComponent extends Component {
    render() {
        /// hình như cài sai bản r , thôi dùng cdn cho nhanh
        //ok ông 
        // ông cài sai thì phải, tại thấy có 2 packege
        return (
            <div className='Item pt-4'>
                <div className="container px-lg-5">
                    <div className="row gx-lg-5">
                        <div className="col-lg-6 col-xxl-4 mb-5">
                            <div className="card bg-light border-0 h-100">
                                <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i class="fa-regular fa-rectangle-history"></i></div>
                                    <h2 className=" fw-bold">Fresh new layout</h2>
                                    <p className="mb-0">With Bootstrap 5, we've created a fresh new layout for this template!</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xxl-4 mb-5">
                            <div className="card bg-light border-0 h-100">
                                <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i className="bi bi-cloud-download" /></div>
                                    <h2 className=" fw-bold">Free to download</h2>
                                    <p className="mb-0">As always, Start Bootstrap has a powerful collectin of free templates.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xxl-4 mb-5">
                            <div className="card bg-light border-0 h-100">
                                <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i className="bi bi-card-heading" /></div>
                                    <h2 className=" fw-bold">Jumbotron hero header</h2>
                                    <p className="mb-0">The heroic part of this template is the jumbotron hero header!</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xxl-4 mb-5">
                            <div className="card bg-light border-0 h-100">
                                <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i className="bi bi-bootstrap" /></div>
                                    <h2 className=" fw-bold">Feature boxes</h2>
                                    <p className="mb-0">We've created some custom feature boxes using Bootstrap icons!</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xxl-4 mb-5">
                            <div className="card bg-light border-0 h-100">
                                <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i className="bi bi-code" /></div>
                                    <h2 className=" fw-bold">Simple clean code</h2>
                                    <p className="mb-0">We keep our dependencies up to date and squash bugs as they come!</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xxl-4 mb-5">
                            <div className="card bg-light border-0 h-100">
                                <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i className="bi bi-patch-check" /></div>
                                    <h2 className="fw-bold">A name you trust</h2>
                                    <p className="mb-0">Start Bootstrap has been the leader in free Bootstrap templates since 2013!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
