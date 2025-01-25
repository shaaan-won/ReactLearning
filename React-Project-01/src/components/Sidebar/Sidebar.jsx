import React from 'react'

const Sidebar = () => {
    return (
        <>
            <div className="sidebar-wrapper" data-layout="stroke-svg">
                <div>
                    <div className="logo-wrapper"><a href="index.html"><img className="img-fluid" src="../assets/images/logo/logo_light.png" alt /></a>
                        <div className="back-btn"><i className="fa fa-angle-left" /></div>
                        <div className="toggle-sidebar">
                            <svg className="stroke-icon sidebar-toggle status_toggle middle">
                                <use href="../assets/svg/icon-sprite.svg#toggle-icon" />
                            </svg>
                            <svg className="fill-icon sidebar-toggle status_toggle middle">
                                <use href="../assets/svg/icon-sprite.svg#fill-toggle-icon" />
                            </svg>
                        </div>
                    </div>
                    <div className="logo-icon-wrapper"><a href="index.html"><img className="img-fluid" src="../assets/images/logo/logo-icon.png" alt /></a></div>
                    <nav className="sidebar-main">
                        <div className="left-arrow" id="left-arrow"><i data-feather="arrow-left" /></div>
                        <div id="sidebar-menu">
                            <ul className="sidebar-links" id="simple-bar">
                                <li className="back-btn"><a href="index.html"><img className="img-fluid" src="../assets/images/logo/logo-icon.png" alt /></a>
                                    <div className="mobile-back text-end"><span>Back</span><i className="fa fa-angle-right ps-2" aria-hidden="true" /></div>
                                </li>
                                <li className="pin-title sidebar-main-title">
                                    <div>
                                        <h6>Pinned</h6>
                                    </div>
                                </li>
                                <li className="sidebar-main-title">
                                    <div>
                                        <h6 className="lan-1">General</h6>
                                    </div>
                                </li>
                                <li className="sidebar-list"><i className="fa fa-thumb-tack" /><a className="sidebar-link sidebar-title" href="javascript:void(0)">
                                    <svg className="stroke-icon">
                                        <use href="../assets/svg/icon-sprite.svg#stroke-home" />
                                    </svg>
                                    <svg className="fill-icon">
                                        <use href="../assets/svg/icon-sprite.svg#fill-home" />
                                    </svg><span className="lan-3">Dashboard        </span></a>
                                    <ul className="sidebar-submenu">
                                        <li><a className="lan-4" href="index.html">Default</a></li>
                                        <li><a className="lan-5" href="dashboard-02.html">Project</a></li>
                                        <li><a href="dashboard-03.html">Ecommerce</a></li>
                                        <li><a href="dashboard-04.html">Education</a></li>
                                    </ul>
                                </li>
                                <li className="sidebar-list"><i className="fa fa-thumb-tack" /><a className="sidebar-link sidebar-title" href="javascript:void(0)">
                                    <svg className="stroke-icon">
                                        <use href="../assets/svg/icon-sprite.svg#stroke-widget" />
                                    </svg>
                                    <svg className="fill-icon">
                                        <use href="../assets/svg/icon-sprite.svg#fill-widget" />
                                    </svg><span className="lan-6">Widgets</span></a>
                                    <ul className="sidebar-submenu">
                                        <li><a href="general-widget.html">General</a></li>
                                        <li><a href="chart-widget.html">Chart</a></li>
                                    </ul>
                                </li>
                                <li className="sidebar-list"><i className="fa fa-thumb-tack" /><a className="sidebar-link sidebar-title" href="javascript:void(0)">
                                    <svg className="stroke-icon">
                                        <use href="../assets/svg/icon-sprite.svg#stroke-layout" />
                                    </svg>
                                    <svg className="fill-icon">
                                        <use href="../assets/svg/icon-sprite.svg#fill-layout" />
                                    </svg><span className="lan-7">Page layout</span></a>
                                    <ul className="sidebar-submenu">
                                        <li><a href="box-layout.html">Boxed</a></li>
                                        <li><a href="layout-rtl.html">RTL</a></li>
                                        <li><a href="layout-dark.html">Dark Layout</a></li>
                                        <li><a href="hide-on-scroll.html">Hide Nav Scroll</a></li>
                                    </ul>
                                </li>
                                <li className="sidebar-main-title">
                                    <div>
                                        <h6 className="lan-8">Applications</h6>
                                    </div>
                                </li>
                                <li className="sidebar-list"><i className="fa fa-thumb-tack">  </i><a className="sidebar-link sidebar-title" href="javascript:void(0)">
                                    <svg className="stroke-icon">
                                        <use href="../assets/svg/icon-sprite.svg#stroke-project" />
                                    </svg>
                                    <svg className="fill-icon">
                                        <use href="../assets/svg/icon-sprite.svg#fill-project" />
                                    </svg><span>Project         </span></a>
                                    <ul className="sidebar-submenu">
                                        <li><a href="projects.html">Project List</a></li>
                                        <li><a href="projectcreate.html">Create new</a></li>
                                    </ul>
                                </li>
                                <li className="sidebar-list"><i className="fa fa-thumb-tack" /><a className="sidebar-link sidebar-title link-nav" href="file-manager.html">
                                    <svg className="stroke-icon">
                                        <use href="../assets/svg/icon-sprite.svg#stroke-file" />
                                    </svg>
                                    <svg className="fill-icon">
                                        <use href="../assets/svg/icon-sprite.svg#fill-file" />
                                    </svg><span>File manager</span></a></li>
                                <li className="sidebar-list"><i className="fa fa-thumb-tack">      </i><a className="sidebar-link sidebar-title link-nav" href="kanban.html">
                                    <svg className="stroke-icon">
                                        <use href="../assets/svg/icon-sprite.svg#stroke-board" />
                                    </svg>
                                    <svg className="fill-icon">
                                        <use href="../assets/svg/icon-sprite.svg#fill-board" />
                                    </svg><span>kanban Board</span></a></li>
                                <li className="sidebar-list"><i className="fa fa-thumb-tack" /><a className="sidebar-link sidebar-title" href="javascript:void(0)">
                                    <svg className="stroke-icon">
                                        <use href="../assets/svg/icon-sprite.svg#stroke-ecommerce" />
                                    </svg>
                                    <svg className="fill-icon">
                                        <use href="../assets/svg/icon-sprite.svg#fill-ecommerce" />
                                    </svg><span>Ecommerce</span></a>
                                    <ul className="sidebar-submenu">
                                        <li><a href="add-product.html">Add Product</a></li>
                                        <li><a href="product.html">Product</a></li>
                                        <li><a href="product-page.html">Product page</a></li>
                                        <li><a href="list-products.html">Product list</a></li>
                                        <li><a href="payment-details.html">Payment Details</a></li>
                                        <li><a href="order-history.html">Order History</a></li>
                                        <li><a className="submenu-title" href="javascript:void(0)">Invoices<span className="sub-arrow"><i className="fa fa-angle-right" /></span></a>
                                            <ul className="nav-sub-childmenu submenu-content">
                                                <li><a href="invoice-1.html">Invoice-1</a></li>
                                                <li><a href="invoice-2.html">Invoice-2</a></li>
                                                <li><a href="invoice-3.html">Invoice-3</a></li>
                                                <li><a href="invoice-4.html">Invoice-4</a></li>
                                                <li> <a href="invoice-5.html">Invoice-5</a></li>
                                                <li><a href="invoice-template.html">Invoice-6</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="cart.html">Cart</a></li>
                                        <li><a href="list-wish.html">Wishlist</a></li>
                                        <li><a href="checkout.html">Checkout</a></li>
                                        <li><a href="pricing.html">Pricing        </a></li>
                                    </ul>
                                </li>
                                <li className="sidebar-list"><i className="fa fa-thumb-tack" /><a className="sidebar-link sidebar-title link-nav" href="letter-box.html">
                                    <svg className="stroke-icon">
                                        <use href="../assets/svg/icon-sprite.svg#stroke-email" />
                                    </svg>
                                    <svg className="fill-icon">
                                        <use href="../assets/svg/icon-sprite.svg#fill-email"> </use>
                                    </svg><span>Letter Box</span></a></li>
                                <li className="sidebar-list"><i className="fa fa-thumb-tack" /><a className="sidebar-link sidebar-title" href="javascript:void(0)">
                                    <svg className="stroke-icon">
                                        <use href="../assets/svg/icon-sprite.svg#stroke-chat" />
                                    </svg>
                                    <svg className="fill-icon">
                                        <use href="../assets/svg/icon-sprite.svg#fill-chat" />
                                    </svg><span>Chat</span></a>
                                    <ul className="sidebar-submenu">
                                        <li><a href="private-chat.html">Private Chat</a></li>
                                        <li><a href="group-chat.html">Group Chat</a></li>
                                    </ul>
                                </li>
                                <li className="sidebar-list"><i className="fa fa-thumb-tack" /><a className="sidebar-link sidebar-title" href="javascript:void(0)">
                                    <svg className="stroke-icon">
                                        <use href="../assets/svg/icon-sprite.svg#stroke-user" />
                                    </svg>
                                    <svg className="fill-icon">
                                        <use href="../assets/svg/icon-sprite.svg#fill-user" />
                                    </svg><span>Users</span></a>
                                    <ul className="sidebar-submenu">
                                        <li><a href="user-profile.html">Users Profile</a></li>
                                        <li><a href="edit-profile.html">Users Edit</a></li>
                                        <li><a href="user-cards.html">Users Cards</a></li>
                                    </ul>
                                </li>
                                <li className="sidebar-list"><i className="fa fa-thumb-tack" /><a className="sidebar-link sidebar-title link-nav" href="bookmark.html">
                                    <svg className="stroke-icon">
                                        <use href="../assets/svg/icon-sprite.svg#stroke-bookmark" />
                                    </svg>
                                    <svg className="fill-icon">
                                        <use href="../assets/svg/icon-sprite.svg#fill-bookmark"> </use>
                                    </svg><span>Bookmarks</span></a></li>
                                <li className="sidebar-list"><i className="fa fa-thumb-tack" /><a className="sidebar-link sidebar-title link-nav" href="contacts.html">
                                    <svg className="stroke-icon">
                                        <use href="../assets/svg/icon-sprite.svg#stroke-contact" />
                                    </svg>
                                    <svg className="fill-icon">
                                        <use href="../assets/svg/icon-sprite.svg#fill-contact"> </use>
                                    </svg><span>Contacts</span></a></li>
                                <li className="sidebar-list"><i className="fa fa-thumb-tack" /><a className="sidebar-link sidebar-title link-nav" href="task.html">
                                    <svg className="stroke-icon">
                                        <use href="../assets/svg/icon-sprite.svg#stroke-task" />
                                    </svg>
                                    <svg className="fill-icon">
                                        <use href="../assets/svg/icon-sprite.svg#fill-task"> </use>
                                    </svg><span>Tasks</span></a></li>
                                <li className="sidebar-list"><i className="fa fa-thumb-tack" /><a className="sidebar-link sidebar-title link-nav" href="calendar-basic.html">
                                    <svg className="stroke-icon">
                                        <use href="../assets/svg/icon-sprite.svg#stroke-calendar" />
                                    </svg>
                                    <svg className="fill-icon">
                                        <use href="../assets/svg/icon-sprite.svg#fill-calender" />
                                    </svg><span>Calendar</span></a></li>
                                <li className="sidebar-list"><i className="fa fa-thumb-tack" /><a className="sidebar-link sidebar-title link-nav" href="social-app.html">
                                    <svg className="stroke-icon">
                                        <use href="../assets/svg/icon-sprite.svg#stroke-social" />
                                    </svg>
                                    <svg className="fill-icon">
                                        <use href="../assets/svg/icon-sprite.svg#fill-social"> </use>
                                    </svg><span>Social App</span></a></li>
                                <li className="sidebar-list"><i className="fa fa-thumb-tack" /><a className="sidebar-link sidebar-title link-nav" href="to-do.html">
                                    <svg className="stroke-icon">
                                        <use href="../assets/svg/icon-sprite.svg#stroke-to-do" />
                                    </svg>
                                    <svg className="fill-icon">
                                        <use href="../assets/svg/icon-sprite.svg#fill-to-do"> </use>
                                    </svg><span>To-Do</span></a></li>
                                <li className="sidebar-list"><i className="fa fa-thumb-tack" /><a className="sidebar-link sidebar-title link-nav" href="search.html">
                                    <svg className="stroke-icon">
                                        <use href="../assets/svg/icon-sprite.svg#stroke-search" />
                                    </svg>
                                    <svg className="fill-icon">
                                        <use href="../assets/svg/icon-sprite.svg#fill-search"> </use>
                                    </svg><span>Search Result</span></a></li>
                                <li className="sidebar-main-title">
                                    <div>
                                        <h6>Forms &amp; Table</h6>
                                    </div>
                                </li>
                                <li className="sidebar-list"><i className="fa fa-thumb-tack" /><a className="sidebar-link sidebar-title" href="javascript:void(0)">
                                    <svg className="stroke-icon">
                                        <use href="../assets/svg/icon-sprite.svg#stroke-form" />
                                    </svg>
                                    <svg className="fill-icon">
                                        <use href="../assets/svg/icon-sprite.svg#fill-form"> </use>
                                    </svg><span>Forms</span></a>
                                    <ul className="sidebar-submenu">
                                        <li><a className="submenu-title" href="javascript:void(0)">Form Controls<span className="sub-arrow"><i className="fa fa-angle-right" /></span></a>
                                            <ul className="nav-sub-childmenu submenu-content">
                                                <li><a href="form-validation.html">Form Validation</a></li>
                                                <li><a href="base-input.html">Base Inputs</a></li>
                                                <li><a href="radio-checkbox-control.html">Checkbox &amp; Radio</a></li>
                                                <li><a href="input-group.html">Input Groups</a></li>
                                                <li> <a href="input-mask.html">Input Mask</a></li>
                                                <li><a href="megaoptions.html">Mega Options</a></li>
                                            </ul>
                                        </li>
                                        <li><a className="submenu-title" href="javascript:void(0)">Form Widgets<span className="sub-arrow"><i className="fa fa-angle-right" /></span></a>
                                            <ul className="nav-sub-childmenu submenu-content">
                                                <li><a href="datepicker.html">Datepicker</a></li>
                                                <li><a href="touchspin.html">Touchspin</a></li>
                                                <li><a href="select2.html">Select2</a></li>
                                                <li><a href="switch.html">Switch</a></li>
                                                <li><a href="typeahead.html">Typeahead</a></li>
                                                <li><a href="clipboard.html">Clipboard</a></li>
                                            </ul>
                                        </li>
                                        <li><a className="submenu-title" href="javascript:void(0)">Form layout<span className="sub-arrow"><i className="fa fa-angle-right" /></span></a>
                                            <ul className="nav-sub-childmenu submenu-content">
                                                <li><a href="form-wizard.html">Form Wizard 1</a></li>
                                                <li><a href="form-wizard-two.html">Form Wizard 2</a></li>
                                                <li><a href="two-factor.html">Two Factor</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="sidebar-list"><i className="fa fa-thumb-tack" /><a className="sidebar-link sidebar-title" href="javascript:void(0)">
                                    <svg className="stroke-icon">
                                        <use href="../assets/svg/icon-sprite.svg#stroke-table" />
                                    </svg>
                                    <svg className="fill-icon">
                                        <use href="../assets/svg/icon-sprite.svg#fill-table" />
                                    </svg><span>Tables</span></a>
                                    <ul className="sidebar-submenu">
                                        <li><a className="submenu-title" href="javascript:void(0)">Bootstrap Tables<span className="sub-arrow"><i className="fa fa-angle-right" /></span></a>
                                            <ul className="nav-sub-childmenu submenu-content">
                                                <li><a href="bootstrap-basic-table.html">Basic Tables</a></li>
                                                <li><a href="table-components.html">Table components</a></li>
                                            </ul>
                                        </li>
                                        <li><a className="submenu-title" href="javascript:void(0)">Data Tables<span className="sub-arrow"><i className="fa fa-angle-right" /></span></a>
                                            <ul className="nav-sub-childmenu submenu-content">
                                                <li><a href="datatable-basic-init.html">Basic Init</a></li>
                                                <li> <a href="datatable-advance.html">Advance Init </a></li>
                                                <li><a href="datatable-API.html">API</a></li>
                                                <li><a href="datatable-data-source.html">Data Sources</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="datatable-ext-autofill.html">Ex. Data Tables</a></li>
                                        <li><a href="jsgrid-table.html">Js Grid Table      </a></li>
                                    </ul>
                                </li>
                                <li className="sidebar-main-title">
                                    <div>
                                        <h6>Components</h6>
                                    </div>
                                </li>
                                <li className="sidebar-list"><i className="fa fa-thumb-tack" /><a className="sidebar-link sidebar-title" href="javascript:void(0)">
                                    <svg className="stroke-icon">
                                        <use href="../assets/svg/icon-sprite.svg#stroke-ui-kits" />
                                    </svg>
                                    <svg className="fill-icon">
                                        <use href="../assets/svg/icon-sprite.svg#fill-ui-kits" />
                                    </svg><span>Ui Kits</span></a>
                                    <ul className="sidebar-submenu">
                                        <li><a href="typography.html">Typography</a></li>
                                        <li><a href="avatars.html">Avatars</a></li>
                                        <li><a href="helper-classes.html">helper classes</a></li>
                                        <li><a href="grid.html">Grid</a></li>
                                        <li><a href="tag-pills.html">Tag &amp; pills</a></li>
                                        <li><a href="progress-bar.html">Progress</a></li>
                                        <li><a href="modal.html">Modal</a></li>
                                        <li><a href="alert.html">Alert</a></li>
                                        <li><a href="popover.html">Popover</a></li>
                                        <li><a href="tooltip.html">Tooltip</a></li>
                                        <li><a href="dropdown.html">Dropdown</a></li>
                                        <li><a href="according.html">Accordion</a></li>
                                        <li><a href="tab-bootstrap.html">Tabs</a></li>
                                        <li><a href="list.html">Lists</a></li>
                                    </ul>
                                </li>
                                <li className="sidebar-list"><i className="fa fa-thumb-tack" /><a className="sidebar-link sidebar-title" href="javascript:void(0)">
                                    <svg className="stroke-icon">
                                        <use href="../assets/svg/icon-sprite.svg#stroke-bonus-kit" />
                                    </svg>
                                    <svg className="fill-icon">
                                        <use href="../assets/svg/icon-sprite.svg#fill-bonus-kit" />
                                    </svg><span>Bonus Ui</span></a>
                                    <ul className="sidebar-submenu">
                                        <li><a href="scrollable.html">Scrollable</a></li>
                                        <li><a href="tree.html">Tree view</a></li>
                                        <li><a href="toasts.html">Toasts</a></li>
                                        <li><a href="rating.html">Rating</a></li>
                                        <li><a href="dropzone.html">dropzone</a></li>
                                        <li><a href="tour.html">Tour</a></li>
                                        <li><a href="sweet-alert2.html">SweetAlert2</a></li>
                                        <li><a href="modal-animated.html">Animated Modal</a></li>
                                        <li><a href="owl-carousel.html">Owl Carousel</a></li>
                                        <li><a href="ribbons.html">Ribbons</a></li>
                                        <li><a href="pagination.html">Pagination</a></li>
                                        <li><a href="breadcrumb.html">Breadcrumb</a></li>
                                        <li><a href="range-slider.html">Range Slider</a></li>
                                        <li><a href="image-cropper.html">Image cropper</a></li>
                                        <li><a href="basic-card.html">Basic Card</a></li>
                                        <li><a href="creative-card.html">Creative Card</a></li>
                                        <li><a href="dragable-card.html">Draggable Card</a></li>
                                        <li><a href="timeline-v-1.html">Timeline </a></li>
                                    </ul>
                                </li>
                                <li className="sidebar-list"><i className="fa fa-thumb-tack" /><a className="sidebar-link sidebar-title" href="javascript:void(0)">
                                    <svg className="stroke-icon">
                                        <use href="../assets/svg/icon-sprite.svg#stroke-animation" />
                                    </svg>
                                    <svg className="fill-icon">
                                        <use href="../assets/svg/icon-sprite.svg#fill-animation" />
                                    </svg><span>Animation</span></a>
                                    <ul className="sidebar-submenu">
                                        <li><a href="animate.html">Animate</a></li>
                                        <li><a href="scroll-reval.html">Scroll Reveal</a></li>
                                        <li><a href="AOS.html">AOS animation</a></li>
                                        <li><a href="tilt.html">Tilt Animation</a></li>
                                        <li><a href="wow.html">Wow Animation</a></li>
                                    </ul>
                                </li>
                                <li className="sidebar-list"><i className="fa fa-thumb-tack" /><a className="sidebar-link sidebar-title" href="javascript:void(0)">
                                    <svg className="stroke-icon">
                                        <use href="../assets/svg/icon-sprite.svg#stroke-icons" />
                                    </svg>
                                    <svg className="fill-icon">
                                        <use href="../assets/svg/icon-sprite.svg#fill-icons" />
                                    </svg><span>Icons</span></a>
                                    <ul className="sidebar-submenu">
                                        <li><a href="flag-icon.html">Flag icon</a></li>
                                        <li><a href="font-awesome.html">Fontawesome Icon</a></li>
                                        <li><a href="ico-icon.html">Ico Icon</a></li>
                                        <li><a href="themify-icon.html">Themify Icon</a></li>
                                        <li><a href="feather-icon.html">Feather icon</a></li>
                                        <li><a href="whether-icon.html">Whether Icon</a></li>
                                    </ul>
                                </li>
                                <li className="sidebar-list"><i className="fa fa-thumb-tack" /><a className="sidebar-link sidebar-title" href="javascript:void(0)">
                                    <svg className="stroke-icon">
                                        <use href="../assets/svg/icon-sprite.svg#stroke-button" />
                                    </svg>
                                    <svg className="fill-icon">
                                        <use href="../assets/svg/icon-sprite.svg#fill-button" />
                                    </svg><span>Buttons</span></a>
                                    <ul className="sidebar-submenu">
                                        <li><a href="buttons.html">Default Style</a></li>
                                        <li><a href="buttons-flat.html">Flat Style</a></li>
                                        <li><a href="buttons-edge.html">Edge Style</a></li>
                                        <li><a href="raised-button.html">Raised Style</a></li>
                                        <li><a href="button-group.html">Button Group</a></li>
                                    </ul>
                                </li>
                                <li className="sidebar-list"><i className="fa fa-thumb-tack" /><a className="sidebar-link sidebar-title" href="javascript:void(0)">
                                    <svg className="stroke-icon">
                                        <use href="../assets/svg/icon-sprite.svg#stroke-charts" />
                                    </svg>
                                    <svg className="fill-icon">
                                        <use href="../assets/svg/icon-sprite.svg#fill-charts" />
                                    </svg><span>Charts</span></a>
                                    <ul className="sidebar-submenu">
                                        <li><a href="echarts.html">Echarts</a></li>
                                        <li><a href="chart-apex.html">Apex Chart</a></li>
                                        <li><a href="chart-google.html">Google Chart</a></li>
                                        <li><a href="chart-sparkline.html">Sparkline chart</a></li>
                                        <li><a href="chart-flot.html">Flot Chart</a></li>
                                        <li><a href="chart-knob.html">Knob Chart</a></li>
                                        <li><a href="chart-morris.html">Morris Chart</a></li>
                                        <li><a href="chartjs.html">Chatjs Chart</a></li>
                                        <li><a href="chartist.html">Chartist Chart</a></li>
                                        <li><a href="chart-peity.html">Peity Chart</a></li>
                                    </ul>
                                </li>
                                <li className="sidebar-main-title">
                                    <div>
                                        <h6>Pages</h6>
                                    </div>
                                </li>
                                <li className="sidebar-list"><i className="fa fa-thumb-tack" /><a className="sidebar-link sidebar-title link-nav" href="landing-page.html">
                                    <svg className="stroke-icon">
                                        <use href="../assets/svg/icon-sprite.svg#stroke-landing-page" />
                                    </svg>
                                    <svg className="fill-icon">
                                        <use href="../assets/svg/icon-sprite.svg#fill-landing-page" />
                                    </svg><span>Landing page</span></a></li>
                                <li className="sidebar-list"><i className="fa fa-thumb-tack" /><a className="sidebar-link sidebar-title link-nav" href="sample-page.html">
                                    <svg className="stroke-icon">
                                        <use href="../assets/svg/icon-sprite.svg#stroke-sample-page" />
                                    </svg>
                                    <svg className="fill-icon">
                                        <use href="../assets/svg/icon-sprite.svg#fill-sample-page" />
                                    </svg><span>Sample page</span></a></li>
                                <li className="sidebar-list"><i className="fa fa-thumb-tack" /><a className="sidebar-link sidebar-title link-nav" href="internationalization.html">
                                    <svg className="stroke-icon">
                                        <use href="../assets/svg/icon-sprite.svg#stroke-internationalization" />
                                    </svg>
                                    <svg className="fill-icon">
                                        <use href="../assets/svg/icon-sprite.svg#fill-internationalization" />
                                    </svg><span>Internationalization</span></a></li>
                                <li className="sidebar-list"><i className="fa fa-thumb-tack" /><a className="sidebar-link sidebar-title link-nav" href="../starter-kit/index.html" target="_blank">
                                    <svg className="stroke-icon">
                                        <use href="../assets/svg/icon-sprite.svg#stroke-starter-kit" />
                                    </svg>
                                    <svg className="fill-icon">
                                        <use href="../assets/svg/icon-sprite.svg#fill-starter-kit" />
                                    </svg><span>Starter kit</span></a></li>
                                <li className="mega-menu sidebar-list"><i className="fa fa-thumb-tack" /><a className="sidebar-link sidebar-title" href="javascript:void(0)">
                                    <svg className="stroke-icon">
                                        <use href="../assets/svg/icon-sprite.svg#stroke-others" />
                                    </svg>
                                    <svg className="fill-icon">
                                        <use href="../assets/svg/icon-sprite.svg#fill-others" />
                                    </svg><span>Others</span></a>
                                    <div className="mega-menu-container menu-content">
                                        <div className="container-fluid">
                                            <div className="row">
                                                <div className="col mega-box">
                                                    <div className="link-section">
                                                        <div className="submenu-title">
                                                            <h5>Error Page</h5>
                                                        </div>
                                                        <ul className="submenu-content opensubmegamenu">
                                                            <li><a href="error-400.html">Error 400</a></li>
                                                            <li><a href="error-401.html">Error 401</a></li>
                                                            <li><a href="error-403.html">Error 403</a></li>
                                                            <li><a href="error-404.html">Error 404</a></li>
                                                            <li><a href="error-500.html">Error 500</a></li>
                                                            <li><a href="error-503.html">Error 503</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col mega-box">
                                                    <div className="link-section">
                                                        <div className="submenu-title">
                                                            <h5> Authentication</h5>
                                                        </div>
                                                        <ul className="submenu-content opensubmegamenu">
                                                            <li><a href="login.html" target="_blank">Login Simple</a></li>
                                                            <li><a href="login_one.html" target="_blank">Login with bg image</a></li>
                                                            <li><a href="login_two.html" target="_blank">Login with image two                    </a></li>
                                                            <li><a href="login-bs-validation.html" target="_blank">Login With validation</a></li>
                                                            <li><a href="login-bs-tt-validation.html" target="_blank">Login with tooltip</a></li>
                                                            <li><a href="login-sa-validation.html" target="_blank">Login with sweetalert</a></li>
                                                            <li><a href="sign-up.html" target="_blank">Register Simple</a></li>
                                                            <li><a href="sign-up-one.html" target="_blank">Register with Bg Image                            </a></li>
                                                            <li><a href="sign-up-two.html" target="_blank">Register with image two</a></li>
                                                            <li><a href="sign-up-wizard.html" target="_blank">Register wizard</a></li>
                                                            <li><a href="unlock.html">Unlock User</a></li>
                                                            <li><a href="forget-password.html">Forget Password</a></li>
                                                            <li><a href="reset-password.html">Reset Password</a></li>
                                                            <li><a href="maintenance.html">Maintenance</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col mega-box">
                                                    <div className="link-section">
                                                        <div className="submenu-title">
                                                            <h5>Coming Soon</h5>
                                                        </div>
                                                        <ul className="submenu-content opensubmegamenu">
                                                            <li><a href="comingsoon.html">Coming Simple</a></li>
                                                            <li><a href="comingsoon-bg-video.html">Coming with Bg video</a></li>
                                                            <li><a href="comingsoon-bg-img.html">Coming with Bg Image</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col mega-box">
                                                    <div className="link-section">
                                                        <div className="submenu-title">
                                                            <h5>Email templates</h5>
                                                        </div>
                                                        <ul className="submenu-content opensubmegamenu">
                                                            <li><a href="basic-template.html">Basic Email</a></li>
                                                            <li><a href="email-header.html">Basic With Header</a></li>
                                                            <li><a href="template-email.html">Ecomerce Template</a></li>
                                                            <li><a href="template-email-2.html">Email Template 2</a></li>
                                                            <li><a href="ecommerce-templates.html">Ecommerce Email</a></li>
                                                            <li><a href="email-order-success.html">Order Success</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="sidebar-main-title">
                                    <div>
                                        <h6>Miscellaneous</h6>
                                    </div>
                                </li>
                                <li className="sidebar-list"><i className="fa fa-thumb-tack" /><a className="sidebar-link sidebar-title" href="javascript:void(0)">
                                    <svg className="stroke-icon">
                                        <use href="../assets/svg/icon-sprite.svg#stroke-gallery" />
                                    </svg>
                                    <svg className="fill-icon">
                                        <use href="../assets/svg/icon-sprite.svg#fill-gallery" />
                                    </svg><span>Gallery</span></a>
                                    <ul className="sidebar-submenu">
                                        <li><a href="gallery.html">Gallery Grid</a></li>
                                        <li><a href="gallery-with-description.html">Gallery Grid Desc</a></li>
                                        <li><a href="gallery-masonry.html">Masonry Gallery</a></li>
                                        <li><a href="masonry-gallery-with-disc.html">Masonry with Desc</a></li>
                                        <li><a href="gallery-hover.html">Hover Effects</a></li>
                                    </ul>
                                </li>
                                <li className="sidebar-list"><i className="fa fa-thumb-tack" /><a className="sidebar-link sidebar-title" href="javascript:void(0)">
                                    <svg className="stroke-icon">
                                        <use href="../assets/svg/icon-sprite.svg#stroke-blog" />
                                    </svg>
                                    <svg className="fill-icon">
                                        <use href="../assets/svg/icon-sprite.svg#fill-blog" />
                                    </svg><span>Blog</span></a>
                                    <ul className="sidebar-submenu">
                                        <li><a href="blog.html">Blog Details</a></li>
                                        <li><a href="blog-single.html">Blog Single</a></li>
                                        <li><a href="add-post.html">Add Post</a></li>
                                    </ul>
                                </li>
                                <li className="sidebar-list"><i className="fa fa-thumb-tack" /><a className="sidebar-link sidebar-title link-nav" href="faq.html">
                                    <svg className="stroke-icon">
                                        <use href="../assets/svg/icon-sprite.svg#stroke-faq" />
                                    </svg>
                                    <svg className="fill-icon">
                                        <use href="../assets/svg/icon-sprite.svg#fill-faq" />
                                    </svg><span>FAQ</span></a></li>
                                <li className="sidebar-list"><i className="fa fa-thumb-tack" /><a className="sidebar-link sidebar-title" href="javascript:void(0)">
                                    <svg className="stroke-icon">
                                        <use href="../assets/svg/icon-sprite.svg#stroke-job-search" />
                                    </svg>
                                    <svg className="fill-icon">
                                        <use href="../assets/svg/icon-sprite.svg#fill-job-search" />
                                    </svg><span>Job Search</span></a>
                                    <ul className="sidebar-submenu">
                                        <li><a href="job-cards-view.html">Cards view</a></li>
                                        <li><a href="job-list-view.html">List View</a></li>
                                        <li><a href="job-details.html">Job Details</a></li>
                                        <li><a href="job-apply.html">Apply</a></li>
                                    </ul>
                                </li>
                                <li className="sidebar-list"><i className="fa fa-thumb-tack" /><a className="sidebar-link sidebar-title" href="javascript:void(0)">
                                    <svg className="stroke-icon">
                                        <use href="../assets/svg/icon-sprite.svg#stroke-learning" />
                                    </svg>
                                    <svg className="fill-icon">
                                        <use href="../assets/svg/icon-sprite.svg#fill-learning" />
                                    </svg><span>Learning</span></a>
                                    <ul className="sidebar-submenu">
                                        <li><a href="learning-list-view.html">Learning List</a></li>
                                        <li><a href="learning-detailed.html">Detailed Course</a></li>
                                    </ul>
                                </li>
                                <li className="sidebar-list"><i className="fa fa-thumb-tack" /><a className="sidebar-link sidebar-title" href="javascript:void(0)">
                                    <svg className="stroke-icon">
                                        <use href="../assets/svg/icon-sprite.svg#stroke-maps" />
                                    </svg>
                                    <svg className="fill-icon">
                                        <use href="../assets/svg/icon-sprite.svg#fill-maps" />
                                    </svg><span>Maps</span></a>
                                    <ul className="sidebar-submenu">
                                        <li><a href="map-js.html">Maps JS</a></li>
                                        <li><a href="vector-map.html">Vector Maps</a></li>
                                    </ul>
                                </li>
                                <li className="sidebar-list"><i className="fa fa-thumb-tack" /><a className="sidebar-link sidebar-title" href="javascript:void(0)">
                                    <svg className="stroke-icon">
                                        <use href="../assets/svg/icon-sprite.svg#stroke-editors" />
                                    </svg>
                                    <svg className="fill-icon">
                                        <use href="../assets/svg/icon-sprite.svg#fill-editors" />
                                    </svg><span>Editors</span></a>
                                    <ul className="sidebar-submenu">
                                        <li><a href="summernote.html">Summer Note</a></li>
                                        <li><a href="ckeditor.html">CK editor</a></li>
                                        <li><a href="simple-MDE.html">MDE editor</a></li>
                                        <li><a href="ace-code-editor.html">ACE code editor </a></li>
                                    </ul>
                                </li>
                                <li className="sidebar-list"><i className="fa fa-thumb-tack" /><a className="sidebar-link sidebar-title link-nav" href="knowledgebase.html">
                                    <svg className="stroke-icon">
                                        <use href="../assets/svg/icon-sprite.svg#stroke-knowledgebase" />
                                    </svg>
                                    <svg className="fill-icon">
                                        <use href="../assets/svg/icon-sprite.svg#fill-knowledgebase" />
                                    </svg><span>Knowledgebase</span></a></li>
                                <li className="sidebar-list"><i className="fa fa-thumb-tack" /><a className="sidebar-link sidebar-title link-nav" href="support-ticket.html">
                                    <svg className="stroke-icon">
                                        <use href="../assets/svg/icon-sprite.svg#stroke-support-tickets" />
                                    </svg>
                                    <svg className="fill-icon">
                                        <use href="../assets/svg/icon-sprite.svg#fill-support-tickets" />
                                    </svg><span>Support Ticket</span></a></li>
                            </ul>
                        </div>
                        <div className="right-arrow" id="right-arrow"><i data-feather="arrow-right" /></div>
                    </nav>
                </div>
            </div>

        </>
    )
}

export default Sidebar