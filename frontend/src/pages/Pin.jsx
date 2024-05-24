import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "flowbite-react";
import { Button } from "flowbite-react";

export default function Pin () {
    const [ModalOpen, setModalOpen] = useState(false);
   const [dpts, setDpts] = useState([])
    const[school,setSchool] = useState('')
    const[department,setDepartment] = useState('')
    const[matricNum,setMatricNum] = useState('')

    const all_schools = [
        {'name':'SCHOOL OF SCIENCE AND COMPUTER STUDIES','sCode':'SSCSS'},
        {'name':'SCHOOL OF ENGINEERING TECHNOLOGY','sCode':'SOE'},
        {'name':'SCHOOL OF BUSINESS STUDIES','sCode':'SBS'},
        {'name':'SCHOOL OF ENVIRONMENTAL STUDIES','sCode':'SOES'},
        {'name':'SCHOOL OF AGRICULTURE AND AGRICULTURAL TECHNOLOGY','sCode':'SAAT'},
    ]

    const all_departments=[
        {'name':'Art and Industrial Design','dCode':"SSCSS"},
        {'name':'Computer Studies','dCode':"SSCSS"},
        {'name':'Food Technology','dCode':"SSCSS"},
        {'name':'Glass and Ceramic Technology','dCode':"SSCSS"},
        {'name':'Mathematics and Statistics','dCode':"SSCSS"},
        {'name':'Science Laboratory Technology','dCode':"SSCSS"},
        {'name':'Department of Agricultural Technology','dCode':'SAAT'},
        {'name':'Department of Fisheries','dCode':'SAAT'},
        {'name':'Department of Horticultural Technology','dCode':'SAAT'},
        {'name':'Department of Accountancy','dCode':'SBS'},
        {'name':'Department of Banking & Finance','dCode':'SBS'},
        {'name':'Department of Business Administration & Management','dCode':'SBS'},
        {'name':'Department of General Studies','dCode':'SBS'},
        {'name':'Department of Marketing','dCode':'SBS'},
        {'name':'Department of Mass Communication','dCode':'SBS'},
        {'name':'Department of Office Technology Management','dCode':'SBS'},
        {'name':'Department of Purchasing and Supply','dCode':'SBS'},
        {'name':'Department of Taxation','dCode':'SBS'},
        {'name':'Department of Agricultural and Bio-environmental Engineering Technology','dCode':'SOE'},
        {'name':'Department of Civil Engineering Technology','dCode':'SOE'},
        {'name':'Department of Electrical/Electronic Engineering Technology','dCode':'SOE'},
        {'name':'Department of Mechanical Engineering Technology','dCode':'SOE'},
        {'name':'Department of Mineral and Petroleum Resources Engineering Technology','dCode':'SOE'},
        {'name':'Department of Architectural Technology','dCode':'SOES'},
        {'name':'Department of Building Technology','dCode':'SOES'},
        {'name':'Department of Estate Management & Valuation','dCode':'SOES'},
        {'name':'Department of Quantity Surveying','dCode':'SOES'},
        {'name':'Department of Surveying and Geo-Informatics','dCode':'SOES'},
        {'name':'Department of Urban & Regional Planning','dCode':'SOES'},
]

    const handleSChoolChange = (value,setschool) => {
        setSchool(setschool);
        let getDpts = all_departments.filter(schl => schl.dCode === value);
        setDpts(getDpts);
    };
  
    const handleDepartmentChange = (value) => {
        setDepartment(value);
    };

    return(
        <section className="min-h-screen bg-cpurple flex items-center justify-center">

            <div className="flex flex-col items-center justify-center px-6 py-3 mx-auto w-full md:h-screen lg:py-0">

                <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-100 dark:text-white">
                    <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"/>
                    FPAPinGenerator
                </a>
                
                <div className="w-full py-8 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <h1 class="text-xl pt-3 text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    New Pin
                    </h1>
                    {/**MODAL */}
                    <div className="font-medium justify-end flex mr-8">
                        <button onClick={() => setModalOpen(true)} className="underline">Tip*</button>
                            <Modal
                            show={ModalOpen}
                            onClose={() => setModalOpen(false)}
                            size="xl"
                        >
                            <Modal.Header className="bg-slate-700 text-gray-100">
                            Tip
                            </Modal.Header>
                            <Modal.Body className="bg-gray-200">
                            <div className="space-y-8">
                            <h1>Welcome !</h1>
                            <h1>Pin generated expires in 3hours and becomes invalid afterward .<br></br>Therefore,users are to generate pins an hour before exam commencement or on queue.</h1>
                            <h1>Ensure that correct infos are supplied into the required box to avoid generation errors.</h1>
                            <h1>Goodluck!</h1>
                            </div>
                            </Modal.Body>
                            <Modal.Footer className="bg-gray-200">
                            <Button
                                color="gray"
                                onClick={() => setModalOpen(false)}
                            >
                                Close
                            </Button>
                            </Modal.Footer>
                        </Modal>
                        </div>
                    {/**MODAL */}
                    <div className="p-6 pt-3 space-y-4 md:space-y-6 sm:p-8">
                        <div className="space-y-4" >
                            <div>
                                <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">School</label>
                                <select type="text" onChange={(e) => handleSChoolChange(e.target.value , e.target.selectedOptions[0].getAttribute('data-school-name'))} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                                <option value=""></option>
                                    {all_schools.map(sc => (
                                    <option value={[sc.sCode]} data-school-name={sc.name}>{sc.name}</option>
                                    ))}
                                </select> 
                            </div>
                            <div>
                                <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Department</label>
                                <select type="text" onChange={(e) => handleDepartmentChange(e.target.value)}  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required >
                                <option value=""></option>
                                    {dpts.map(dpt => (
                                        <option value={[dpt.dCode]}>{dpt.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Matriculation Number</label>
                                <input type="text" onChange={(e) => setPin(e.target.value)} name="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                </div>
                                <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot matric number?</a>
                            </div>
                            <button onClick={()=> VerifyPin()} className="w-full text-white bg-cpurple hover:bg-cpurple_light focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Generate</button>
                                
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Already have a pin? <Link to={'/'} className="font-medium text-primary-600 hover:underline dark:text-primary-500">Verify pin</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            </section>
    )
}