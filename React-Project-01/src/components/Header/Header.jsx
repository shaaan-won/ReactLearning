import React from 'react'

const Header = () => {
    return (
        <div className="page-header row">
            <div className="header-logo-wrapper col-auto">
                <div className="logo-wrapper"><a href="index.html"><img className="img-fluid for-light" src="../assets/images/logo/logo.png" alt /><img className="img-fluid for-dark" src="../assets/images/logo/logo_light.png" alt /></a></div>
            </div>
            <div className="col-4 col-xl-4 page-title">
                <h4 className="f-w-700">Default dashboard</h4>
                <nav>
                    <ol className="breadcrumb justify-content-sm-start align-items-center mb-0">
                        <li className="breadcrumb-item"><a href="index.html"> <i data-feather="home"> </i></a></li>
                        <li className="breadcrumb-item f-w-400">Dashboard</li>
                        <li className="breadcrumb-item f-w-400 active">Default</li>
                    </ol>
                </nav>
            </div>
            {/* Page Header Start*/}
            <div className="header-wrapper col m-0">
                <div className="row">
                    <form className="form-inline search-full col" action="#" method="get">
                        <div className="form-group w-100">
                            <div className="Typeahead Typeahead--twitterUsers">
                                <div className="u-posRelative">
                                    <input className="demo-input Typeahead-input form-control-plaintext w-100" type="text" placeholder="Search Mofi .." name="q" title autofocus />
                                    <div className="spinner-border Typeahead-spinner" role="status"><span className="sr-only">Loading...</span></div><i className="close-search" data-feather="x" />
                                </div>
                                <div className="Typeahead-menu" />
                            </div>
                        </div>
                    </form>
                    <div className="header-logo-wrapper col-auto p-0">
                        <div className="logo-wrapper"><a href="index.html"><img className="img-fluid" src="../assets/images/logo/logo.png" alt /></a></div>
                        <div className="toggle-sidebar">
                            <svg className="stroke-icon sidebar-toggle status_toggle middle">
                                <use href="../assets/svg/icon-sprite.svg#toggle-icon" />
                            </svg>
                        </div>
                    </div>
                    <div className="nav-right col-xxl-8 col-xl-6 col-md-7 col-8 pull-right right-header p-0 ms-auto">
                        <ul className="nav-menus">
                            <li>                         <span className="header-search">
                                <svg>
                                    <use href="../assets/svg/icon-sprite.svg#search" />
                                </svg></span></li>
                            <li>
                                <div className="form-group w-100">
                                    <div className="Typeahead Typeahead--twitterUsers">
                                        <div className="u-posRelative d-flex align-items-center">
                                            <svg className="search-bg svg-color">
                                                <use href="../assets/svg/icon-sprite.svg#search" />
                                            </svg>
                                            <input className="demo-input py-0 Typeahead-input form-control-plaintext w-100" type="text" placeholder="Search Mofi .." name="q" title />
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="onhover-dropdown">
                                <div className="notification-box">
                                    <svg>
                                        <use href="../assets/svg/icon-sprite.svg#notification" />
                                    </svg><span className="badge rounded-pill badge-primary">4 </span>
                                </div>
                                <div className="onhover-show-div notification-dropdown">
                                    <h5 className="f-18 f-w-600 mb-0 dropdown-title">Notitications                             </h5>
                                    <ul className="notification-box">
                                        <li className="d-flex">
                                            <div className="flex-shrink-0 bg-light-primary"><img src="../assets/images/dashboard/icon/wallet.png" alt="Wallet" /></div>
                                            <div className="flex-grow-1"> <a href="private-chat.html">
                                                <h6>New daily offer added</h6></a>
                                                <p>New user-only offer added</p>
                                            </div>
                                        </li>
                                        <li className="d-flex">
                                            <div className="flex-shrink-0 bg-light-info"><img src="../assets/images/dashboard/icon/shield-dne.png" alt="Shield-dne" /></div>
                                            <div className="flex-grow-1"> <a href="private-chat.html">
                                                <h6>Product Evaluation</h6></a>
                                                <p>Changed to a new workflow</p>
                                            </div>
                                        </li>
                                        <li className="d-flex">
                                            <div className="flex-shrink-0 bg-light-warning"><img src="../assets/images/dashboard/icon/graph.png" alt="Graph" /></div>
                                            <div className="flex-grow-1"> <a href="private-chat.html">
                                                <h6>Return of a Product</h6></a>
                                                <p>452 items were returned</p>
                                            </div>
                                        </li>
                                        <li className="d-flex">
                                            <div className="flex-shrink-0 bg-light-tertiary"><img src="../assets/images/dashboard/icon/ticket-star.png" alt="Ticket-star" /></div>
                                            <div className="flex-grow-1"> <a href="private-chat.html">
                                                <h6>Recently Paid</h6></a>
                                                <p>Mastercard payment of $343</p>
                                            </div>
                                        </li>
                                        <li><a className="f-w-700" href="private-chat.html">Check all   </a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="onhover-dropdown">
                                <svg>
                                    <use href="../assets/svg/icon-sprite.svg#header-bookmark" />
                                </svg>
                                <div className="onhover-show-div bookmark-flip">
                                    <div className="flip-card">
                                        <div className="flip-card-inner">
                                            <div className="front">
                                                <h5 className="f-18 f-w-600 mb-0 dropdown-title">Bookmark</h5>
                                                <ul className="bookmark-dropdown">
                                                    <li>
                                                        <div className="row">
                                                            <div className="col-4 text-center">
                                                                <div className="bookmark-content">
                                                                    <div className="bookmark-icon bg-light-primary"><i className="stroke-primary" data-feather="file-text" /></div><span className="font-primary">Forms</span>
                                                                </div>
                                                            </div>
                                                            <div className="col-4 text-center">
                                                                <div className="bookmark-content">
                                                                    <div className="bookmark-icon bg-light-secondary"><i className="stroke-secondary" data-feather="user" /></div><span className="font-secondary">Profile</span>
                                                                </div>
                                                            </div>
                                                            <div className="col-4 text-center">
                                                                <div className="bookmark-content">
                                                                    <div className="bookmark-icon bg-light-warning"><i className="stroke-warning" data-feather="server" /></div><span className="font-warning">Tables</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="text-center"><a className="flip-btn f-w-700" id="flip-btn" href="javascript:void(0)">Add New Bookmark</a></li>
                                                </ul>
                                            </div>
                                            <div className="back">
                                                <ul>
                                                    <li>
                                                        <div className="bookmark-dropdown flip-back-content">
                                                            <input type="text" placeholder="search..." />
                                                        </div>
                                                    </li>
                                                    <li><a className="f-w-700 d-block flip-back" id="flip-back" href="javascript:void(0)">Back</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="mode">
                                    <svg>
                                        <use href="../assets/svg/icon-sprite.svg#moon" />
                                    </svg>
                                </div>
                            </li>
                            <li className="onhover-dropdown">
                                <div className="notification-box">
                                    <svg>
                                        <use href="../assets/svg/icon-sprite.svg#header-message" />
                                    </svg><span className="badge rounded-pill badge-info">3 </span>
                                </div>
                                <div className="onhover-show-div notification-dropdown">
                                    <h5 className="f-18 f-w-600 mb-0 dropdown-title">Messages           </h5>
                                    <ul className="messages">
                                        <li className="d-flex b-light1-primary gap-2">
                                            <div className="flex-shrink-0"><img src="../assets/images/dashboard-2/user/1.png" alt="Graph" /></div>
                                            <div className="flex-grow-1"> <a href="private-chat.html">
                                                <h6 className="font-primary f-w-600">Hackett Yessenia</h6></a>
                                                <p>Hello Miss...😊</p>
                                            </div><span>10 min.</span>
                                        </li>
                                        <li className="d-flex b-light1-secondary gap-2">
                                            <div className="flex-shrink-0"><img src="../assets/images/dashboard-2/user/2.png" alt="Graph" /></div>
                                            <div className="flex-grow-1"> <a href="private-chat.html">
                                                <h6 className="font-secondary f-w-600">schneider Adan</h6></a>
                                                <p>Wishing You a Happy Birthday Dear..  🥳🎊</p>
                                            </div><span>25 min.</span>
                                        </li>
                                        <li className="d-flex b-light1-success gap-2">
                                            <div className="flex-shrink-0"><img src="../assets/images/dashboard-2/user/3.png" alt="Graph" /></div>
                                            <div className="flex-grow-1"> <a href="private-chat.html">
                                                <h6 className="font-success f-w-600">Mahdi Gholizadeh</h6></a>
                                                <p>Hello Dear!! This Theme Is Very beautiful</p>
                                            </div><span>1 hours</span>
                                        </li>
                                        <li><a className="f-w-700" href="email-application.html">Check all</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="cart-nav onhover-dropdown">
                                <div className="cart-box">
                                    <svg>
                                        <use href="../assets/svg/icon-sprite.svg#stroke-ecommerce" />
                                    </svg>
                                </div>
                                <div className="cart-dropdown onhover-show-div">
                                    <h5 className="f-18 f-w-600 mb-0 dropdown-title">Cart</h5>
                                    <ul>
                                        <li>
                                            <div className="d-flex"><img className="img-fluid b-r-5 me-3 img-60" src="../assets/images/other-images/cart-img.jpg" alt />
                                                <div className="flex-grow-1"><span className="f-w-600">Furniture Chair for Home</span>
                                                    <div className="qty-box">
                                                        <div className="input-group"><span className="input-group-prepend">
                                                            <button className="btn quantity-left-minus" type="button" data-type="minus" data-field>-</button></span>
                                                            <input className="form-control input-number" type="text" name="quantity" defaultValue={1} /><span className="input-group-prepend">
                                                                <button className="btn quantity-right-plus" type="button" data-type="plus" data-field>+</button></span>
                                                        </div>
                                                    </div>
                                                    <h6 className="font-primary">$500</h6>
                                                </div>
                                                <div className="close-circle"><a className="bg-danger" href="#"><i data-feather="x" /></a></div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex"><img className="img-fluid b-r-5 me-3 img-60" src="../assets/images/other-images/table-img.jpg" alt />
                                                <div className="flex-grow-1"><span className="f-w-600">Furniture Table for Office</span>
                                                    <div className="qty-box">
                                                        <div className="input-group"><span className="input-group-prepend">
                                                            <button className="btn quantity-left-minus" type="button" data-type="minus" data-field>-</button></span>
                                                            <input className="form-control input-number" type="text" name="quantity" defaultValue={1} /><span className="input-group-prepend">
                                                                <button className="btn quantity-right-plus" type="button" data-type="plus" data-field>+</button></span>
                                                        </div>
                                                    </div>
                                                    <h6 className="font-primary">$500.00</h6>
                                                </div>
                                                <div className="close-circle"><a className="bg-danger" href="#"><i data-feather="x" /></a></div>
                                            </div>
                                        </li>
                                        <li className="total">
                                            <h6 className="mb-0">Order Total : <span className="f-w-600 f-right">$1000.00</span></h6>
                                        </li>
                                        <li className="text-center"><a className="d-block mb-3 view-cart f-w-700" href="cart.html">Go to your cart</a><a className="btn btn-primary view-checkout" href="checkout.html">Checkout</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="profile-nav onhover-dropdown px-0 py-0">
                                <div className="d-flex profile-media align-items-center"><img className="img-30" src="../assets/images/dashboard/profile.png" alt />
                                    <div className="flex-grow-1"><span>Alen Miller</span>
                                        <p className="mb-0 font-outfit">UI Designer<i className="fa fa-angle-down" /></p>
                                    </div>
                                </div>
                                <ul className="profile-dropdown onhover-show-div">
                                    <li><a href="private-chat.html"><i data-feather="user" /><span>Account </span></a></li>
                                    <li><a href="letter-box.html"><i data-feather="mail" /><span>Inbox</span></a></li>
                                    <li><a href="task.html"><i data-feather="file-text" /><span>Taskboard</span></a></li>
                                    <li><a href="edit-profile.html"><i data-feather="settings" /><span>Settings</span></a></li>
                                    <li><a href="login.html"><i data-feather="log-in"> </i><span>Log in</span></a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Page Header Ends                              */}
        </div>

    )
}

export default Header