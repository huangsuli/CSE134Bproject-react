import React from 'react';

export default class MakeRequest extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddRequest = this.handleAddRequest.bind(this);
        this.resetErrors = this.resetErrors.bind(this);

        this.state = {
            sym_error: "",
            date_error: ""
        };
    }

    resetErrors() {
        this.setState( () => ({            
            sym_error: "",
            date_error: ""
        }))
    }

    handleAddRequest(eForm) {
        eForm.preventDefault();

        this.resetErrors();

        let docName, date_full, date_day, date_month, date_year, sym, logStr;
        let err = false;  
        
        docName = eForm.target.elements.doctor_names.value;

        if(!docName) {
            docName = "John Selvester";
        }

        date_full = eForm.target.elements.app_date.value.split("-");
        date_day = parseInt(date_full[2]);
        date_month = parseInt(date_full[1]);
        date_year = parseInt(date_full[0]);

        if(isNaN(date_day)) {
            err = true;
            this.setState( () => ({date_error: "Please enter a valid Date"}) );
        }

        sym = eForm.target.elements.app_sym.value.trim();

        if(!sym) {
            err = true;
            this.setState( () => ({sym_error: "Please Input something"}) );
        }

        logStr = "You submitted a request to " + docName;

        if(!err){
            let request = {
                id: 0,
                date: {
                    Day: date_day,
                    Month: date_month,
                    Year: date_year,
                    ToString() {return this.Day + "/" + this.Month + "/" + this.Year}
                },
                doctorName: docName,
                symptoms: sym,
                log: [logStr],
                status: 2
            }

            this.props.requestAdder(request);
        }
    }

    render(props) {
        return (
            <div className="article" id="makeRequest">
                <div className="article_title">
                    <h3>Request Form</h3>
                </div>

                <div className="info_container container_spread roboto">
                <div className="form blue_inputs blue_dropbox roboto">
                    <form onSubmit={this.handleAddRequest}>
                        Which doctor would you like to see? <br />
                        <select name="doctor_names">
                            <option value="">Any</option>
                            <option value="Mark Young">Mark Young</option>
                            <option value="John Selvester">John Selvester</option>
                            <option value="Monica Guntaler">Monica Guntaler</option>
                        </select> <br /><br/>

                        Describe your symptoms and what might be aching : <br />
                        <span className="error_span">{this.state.sym_error}</span>
                        <textarea id="symptoms_input" rows="10" name="app_sym"></textarea> <br /><br />

                        Choose the day that works for you : <br />
                        <span className="error_span">{this.state.date_error}</span>
                        <div className="form blue_inputs blue_dropbox roboto">
                            <input id="input_date" type="date" name="app_date" />
                        </div>
                        <input type="submit" className="medium_blue_r_button" value="Submit Form"/>
                    </form>
                </div>
                </div>
            </div>
        );
    }
}