const interviews = [
    {
        interview: "click-tracker-36",
        content: `
        <div class="form-group" id="formgroup1">
            <label for="">Tiempo de caminata [min]:</label>
            <div class="grupolabel">
                <input type="button"   name="btn1"  data-value="" value="Ver">
                <input type="button"   name="btn7" data-value="" value="Ver">
                <input type="button"   name="btn13" data-value="" value="Ver">
            </div>
        </div>
        <div class="form-group" id="formgroup2">
            <label for="">Tiempo de espera [min]:</label>            
            <div class="grupolabel">
                <input type="button"   name="btn2"  data-value="" value="Ver">
                <input type="button"   name="btn8"  data-value="" value="Ver">
                <input type="button"   name="btn14" data-value="" value="Ver">
            </div>
        </div>
        <div class="form-group" id="formgroup3">    
            <label for="">Tiempo de viaje [min]:</label>
            <div class="grupolabel">
                <input type="button"   name="btn3"  data-value="" value="Ver">
                <input type="button"   name="btn9"  data-value="" value="Ver">
                <input type="button"   name="btn15" data-value="" value="Ver">
            </div>
        </div>
        <div class="form-group" id="formgroup4">
            <label for="">Tarifa [$]:</label>
            <div class="grupolabel" > 
                <input type="button"   name="btn4"  data-value="" value="Ver">
                <input type="button"   name="btn10" data-value="" value="Ver">
                <input type="button"   name="btn16" data-value="" value="Ver">
            </div>
        </div>
        <div class="form-group" id="formgroup5">
            <label for="">Trasbordo [-]:</label>
            <div class="grupolabel">
                <input type="button"   name="btn5"  data-value="" value="Ver">
                <input type="button"   name="btn11" data-value="" value="Ver">
                <input type="button"   name="btn17" data-value="" value="Ver">
            </div>
        </div>
        <div class="form-group" id="formgroup6">
            <label for="">¿Hay asiento?</label>
            <div class="grupolabel">
                <input type="button"   name="btn6"  data-value="" value="Ver">
                <input type="button"   name="btn12" data-value="" value="Ver">
                <input type="button"   name="btn18" data-value="" value="Ver">
            </div>
        </div>
    `,
        screens: [
            {
                screen: 1,
                buttons: [
                    { button: "btn1", value: 1.2, shouldMultiply: true, row: 1 },
                    { button: "btn2", value: 0.5, shouldMultiply: true, row: 2 },
                    { button: "btn3", value: 0.5, shouldMultiply: true, row: 3 },
                    { button: "btn4", value: 750, shouldMultiply: false, row: 4 },
                    { button: "btn5", value: 2, shouldMultiply: false, row: 5 },
                    { button: "btn6", value: 0, shouldMultiply: false, row: 6 },
                    { button: "btn7", value: 1.2, shouldMultiply: true, row: 1 },
                    { button: "btn8", value: 0.85, shouldMultiply: true, row: 2 },
                    { button: "btn9", value: 1.85, shouldMultiply: true, row: 3 },
                    { button: "btn10", value: 830, shouldMultiply: false, row: 4 },
                    { button: "btn11", value: 0, shouldMultiply: false, row: 5 },
                    { button: "btn12", value: 0, shouldMultiply: false, row: 6 },
                    { button: "btn13", value: 0.5, shouldMultiply: true, row: 1 },
                    { button: "btn14", value: 1.85, shouldMultiply: true, row: 2 },
                    { button: "btn15", value: 1.85, shouldMultiply: true, row: 3 },
                    { button: "btn16", value: 700, shouldMultiply: false, row: 4 },
                    { button: "btn17", value: 0, shouldMultiply: false, row: 5 },
                    { button: "btn18", value: 1, shouldMultiply: false, row: 6 },


                ]
            },
            {
                screen: 2,
                buttons: [
                    { button: "btn1", value: 1.2, shouldMultiply: true, row: 1 },
                    { button: "btn2", value: 1.2, shouldMultiply: true, row: 2 },
                    { button: "btn3", value: 0.85, shouldMultiply: true, row: 3 },
                    { button: "btn4", value: 830, shouldMultiply: false, row: 4 },
                    { button: "btn5", value: 0, shouldMultiply: false, row: 5 },
                    { button: "btn6", value: 0, shouldMultiply: false, row: 6 },
                    { button: "btn7", value: 0.85, shouldMultiply: true, row: 1 },
                    { button: "btn8", value: 0.5, shouldMultiply: true, row: 2 },
                    { button: "btn9", value: 0.85, shouldMultiply: true, row: 3 },
                    { button: "btn10", value: 700, shouldMultiply: false, row: 4 },
                    { button: "btn11", value: 2, shouldMultiply: false, row: 5 },
                    { button: "btn12", value: 0, shouldMultiply: false, row: 6 },
                    { button: "btn13", value: 1.2, shouldMultiply: true, row: 1 },
                    { button: "btn14", value: 1.2, shouldMultiply: true, row: 2 },
                    { button: "btn15", value: 0.85, shouldMultiply: true, row: 3 },
                    { button: "btn16", value: 830, shouldMultiply: false, row: 4 },
                    { button: "btn17", value: 1, shouldMultiply: false, row: 5 },
                    { button: "btn18", value: 0, shouldMultiply: false, row: 6 },
                ]
            }, {
                screen: 3,

                buttons: [
                    { button: "btn1", value: 0.5, shouldMultiply: true, row: 1 },
                    { button: "btn2", value: 0.85, shouldMultiply: true, row: 2 },
                    { button: "btn3", value: 1.85, shouldMultiply: true, row: 3 },
                    { button: "btn4", value: 750, shouldMultiply: false, row: 4 },
                    { button: "btn5", value: 2, shouldMultiply: false, row: 5 },
                    { button: "btn6", value: 1, shouldMultiply: false, row: 6 },
                    { button: "btn7", value: 1.85, shouldMultiply: true, row: 1 },
                    { button: "btn8", value: 1.2, shouldMultiply: true, row: 2 },
                    { button: "btn9", value: 0.5, shouldMultiply: true, row: 3 },
                    { button: "btn10", value: 700, shouldMultiply: false, row: 4 },
                    { button: "btn11", value: 0, shouldMultiply: false, row: 5 },
                    { button: "btn12", value: 1, shouldMultiply: false, row: 6 },
                    { button: "btn13", value: 1.2, shouldMultiply: true, row: 1 },
                    { button: "btn14", value: 1.2, shouldMultiply: true, row: 2 },
                    { button: "btn15", value: 1.2, shouldMultiply: true, row: 3 },
                    { button: "btn16", value: 750, shouldMultiply: false, row: 4 },
                    { button: "btn17", value: 1, shouldMultiply: false, row: 5 },
                    { button: "btn18", value: 0, shouldMultiply: false, row: 6 },


                ]
            }, {
                screen: 4,
                buttons: [
                    { button: "btn1", value: 0.85, shouldMultiply: true, row: 1 },
                    { button: "btn2", value: 1.85, shouldMultiply: true, row: 2 },
                    { button: "btn3", value: 0.85, shouldMultiply: true, row: 3 },
                    { button: "btn4", value: 750, shouldMultiply: false, row: 4 },
                    { button: "btn5", value: 1, shouldMultiply: false, row: 5 },
                    { button: "btn6", value: 0, shouldMultiply: false, row: 6 },
                    { button: "btn7", value: 0.85, shouldMultiply: true, row: 1 },
                    { button: "btn8", value: 0.5, shouldMultiply: true, row: 2 },
                    { button: "btn9", value: 1.85, shouldMultiply: true, row: 3 },
                    { button: "btn10", value: 750, shouldMultiply: false, row: 4 },
                    { button: "btn11", value: 0, shouldMultiply: false, row: 5 },
                    { button: "btn12", value: 1, shouldMultiply: false, row: 6 },
                    { button: "btn13", value: 0.5, shouldMultiply: true, row: 1 },
                    { button: "btn14", value: 1.85, shouldMultiply: true, row: 2 },
                    { button: "btn15", value: 0.5, shouldMultiply: true, row: 3 },
                    { button: "btn16", value: 700, shouldMultiply: false, row: 4 },
                    { button: "btn17", value: 2, shouldMultiply: false, row: 5 },
                    { button: "btn18", value: 1, shouldMultiply: false, row: 6 },
                ]
            }, {
                screen: 5,
                buttons: [
                    { button: "btn1", value: 0.85, shouldMultiply: true, row: 1 },
                    { button: "btn2", value: 1.85, shouldMultiply: true, row: 2 },
                    { button: "btn3", value: 0.5, shouldMultiply: true, row: 3 },
                    { button: "btn4", value: 700, shouldMultiply: false, row: 4 },
                    { button: "btn5", value: 0, shouldMultiply: false, row: 5 },
                    { button: "btn6", value: 0, shouldMultiply: false, row: 6 },
                    { button: "btn7", value: 1.2, shouldMultiply: true, row: 1 },
                    { button: "btn8", value: 1.2, shouldMultiply: true, row: 2 },
                    { button: "btn9", value: 1.2, shouldMultiply: true, row: 3 },
                    { button: "btn10", value: 750, shouldMultiply: false, row: 4 },
                    { button: "btn11", value: 1, shouldMultiply: false, row: 5 },
                    { button: "btn12", value: 0, shouldMultiply: false, row: 6 },
                    { button: "btn13", value: 1.85, shouldMultiply: true, row: 1 },
                    { button: "btn14", value: 0.5, shouldMultiply: true, row: 2 },
                    { button: "btn15", value: 0.85, shouldMultiply: true, row: 3 },
                    { button: "btn16", value: 750, shouldMultiply: false, row: 4 },
                    { button: "btn17", value: 2, shouldMultiply: false, row: 5 },
                    { button: "btn18", value: 1, shouldMultiply: false, row: 6 },

                ]
            },
            {
                screen: 6,
                buttons: [
                    { button: "btn1", value: 1.85, shouldMultiply: true, row: 1 },
                    { button: "btn2", value: 1.2, shouldMultiply: true, row: 2 },
                    { button: "btn3", value: 1.2, shouldMultiply: true, row: 3 },
                    { button: "btn4", value: 700, shouldMultiply: false, row: 4 },
                    { button: "btn5", value: 1, shouldMultiply: false, row: 5 },
                    { button: "btn6", value: 1, shouldMultiply: false, row: 6 },
                    { button: "btn7", value: 1.85, shouldMultiply: true, row: 1 },
                    { button: "btn8", value: 0.85, shouldMultiply: true, row: 2 },
                    { button: "btn9", value: 0.85, shouldMultiply: true, row: 3 },
                    { button: "btn10", value: 750, shouldMultiply: false, row: 4 },
                    { button: "btn11", value: 2, shouldMultiply: false, row: 5 },
                    { button: "btn12", value: 1, shouldMultiply: false, row: 6 },
                    { button: "btn13", value: 0.85, shouldMultiply: true, row: 1 },
                    { button: "btn14", value: 0.85, shouldMultiply: true, row: 2 },
                    { button: "btn15", value: 1.2, shouldMultiply: true, row: 3 },
                    { button: "btn16", value: 750, shouldMultiply: false, row: 4 },
                    { button: "btn17", value: 0, shouldMultiply: false, row: 5 },
                    { button: "btn18", value: 0, shouldMultiply: false, row: 6 },

                ]
            }, {
                screen: 7,
                buttons: [
                    { button: "btn1", value: 1.2, shouldMultiply: true, row: 1 },
                    { button: "btn2", value: 0.5, shouldMultiply: true, row: 2 },
                    { button: "btn3", value: 0.5, shouldMultiply: true, row: 3 },
                    { button: "btn4", value: 750, shouldMultiply: false, row: 4 },
                    { button: "btn5", value: 2, shouldMultiply: false, row: 5 },
                    { button: "btn6", value: 0, shouldMultiply: false, row: 6 },
                    { button: "btn7", value: 1.2, shouldMultiply: true, row: 1 },
                    { button: "btn8", value: 0.85, shouldMultiply: true, row: 2 },
                    { button: "btn9", value: 1.85, shouldMultiply: true, row: 3 },
                    { button: "btn10", value: 830, shouldMultiply: false, row: 4 },
                    { button: "btn11", value: 0, shouldMultiply: false, row: 5 },
                    { button: "btn12", value: 0, shouldMultiply: false, row: 6 },
                    { button: "btn13", value: 0.5, shouldMultiply: true, row: 1 },
                    { button: "btn14", value: 1.85, shouldMultiply: true, row: 2 },
                    { button: "btn15", value: 1.85, shouldMultiply: true, row: 3 },
                    { button: "btn16", value: 700, shouldMultiply: false, row: 4 },
                    { button: "btn17", value: 0, shouldMultiply: false, row: 5 },
                    { button: "btn18", value: 1, shouldMultiply: false, row: 6 },

                ]
            }, {
                screen: 8,

                buttons: [
                    { button: "btn1", value: 0.5, shouldMultiply: true, row: 1 },
                    { button: "btn2", value: 0.85, shouldMultiply: true, row: 1 },
                    { button: "btn3", value: 1.85, shouldMultiply: true, row: 1 },
                    { button: "btn4", value: 830, shouldMultiply: false, row: 1 },
                    { button: "btn5", value: 1, shouldMultiply: false, row: 1 },
                    { button: "btn6", value: 1, shouldMultiply: false, row: 1 },
                    { button: "btn7", value: 0.5, shouldMultiply: true, row: 1 },
                    { button: "btn8", value: 1.85, shouldMultiply: true, row: 1 },
                    { button: "btn9", value: 1.2, shouldMultiply: true, row: 1 },
                    { button: "btn10", value: 700, shouldMultiply: false, row: 1 },
                    { button: "btn11", value: 1, shouldMultiply: false, row: 1 },
                    { button: "btn12", value: 0, shouldMultiply: false, row: 1 },
                    { button: "btn13", value: 1.85, shouldMultiply: true, row: 1 },
                    { button: "btn14", value: 0.5, shouldMultiply: true, row: 1 },
                    { button: "btn15", value: 0.5, shouldMultiply: true, row: 1 },
                    { button: "btn16", value: 830, shouldMultiply: false, row: 1 },
                    { button: "btn17", value: 0, shouldMultiply: false, row: 1 },
                    { button: "btn18", value: 1, shouldMultiply: false, row: 1 },

                ]
            }

        ]
    },

    {
        interview: "Click-tracker-35"
        , content: `
        <div class="form-group" id="formgroup7">
            <label for="">Tiempo de caminata [min]:</label>
            <div class="grupolabel">
                <input type="button"   name="btn1"  data-value="" value="Ver">
                <input type="button"   name="btn6" data-value="" value="Ver">
                <input type="button"   name="btn11" data-value="" value="Ver">
            </div>
        </div>
        <div class="form-group" id="formgroup8">
            <label for="">Tiempo de espera [min]:</label>            
            <div class="grupolabel">
                <input type="button"   name="btn2"  data-value="" value="Ver">
                <input type="button"   name="btn7"  data-value="" value="Ver">
                <input type="button"   name="btn12" data-value="" value="Ver">
            </div>
        </div>
        <div class="form-group" id="formgroup9">    
            <label for="">Tiempo de viaje [min]:</label>
            <div class="grupolabel">
                <input type="button"   name="btn3"  data-value="" value="Ver">
                <input type="button"   name="btn8"  data-value="" value="Ver">
                <input type="button"   name="btn13" data-value="" value="Ver">
            </div>
        </div>
        <div class="form-group" id="formgroup10">
            <label for="">Tarifa [$]:</label>
            <div class="grupolabel">  
                <input type="button"   name="btn4"  data-value="" value="Ver">
                <input type="button"   name="btn9" data-value="" value="Ver">
                <input type="button"   name="btn14" data-value="" value="Ver">
            </div>
        </div>
        <div class="form-group" id="formgroup11">
            <label for="">Trasbordo [-]:</label>
            <div class="grupolabel">
                <input type="button"   name="btn5"  data-value="" value="Ver">
                <input type="button"   name="btn10" data-value="" value="Ver">
                <input type="button"   name="btn15" data-value="" value="Ver">
            </div>
        </div>
    `, screens: [
            {
                screen: 1,
                buttons: [
                    { button: "btn1", value: 0.5, shouldMultiply: true, row: 1 },
                    { button: "btn2", value: 1.85, shouldMultiply: true, row: 2 },
                    { button: "btn3", value: 1.2, shouldMultiply: true, row: 3 },
                    { button: "btn4", value: 830, shouldMultiply: false, row: 4 },
                    { button: "btn5", value: 2, shouldMultiply: false, row: 5 },
                    { button: "btn6", value: 1.85, shouldMultiply: true, row: 1 },
                    { button: "btn7", value: 1.2, shouldMultiply: true, row: 2 },
                    { button: "btn8", value: 1.2, shouldMultiply: true, row: 3 },
                    { button: "btn9", value: 700, shouldMultiply: false, row: 4 },
                    { button: "btn10", value: 1, shouldMultiply: false, row: 5 },
                    { button: "btn11", value: 1.85, shouldMultiply: true, row: 1 },
                    { button: "btn12", value: 0.85, shouldMultiply: true, row: 2 },
                    { button: "btn13", value: 0.5, shouldMultiply: true, row: 3 },
                    { button: "btn14", value: 830, shouldMultiply: false, row: 4 },
                    { button: "btn15", value: 0, shouldMultiply: false, row: 5 }


                ]
            },
            {
                screen: 2,
                buttons: [
                    { button: "btn1", value: 1.2, shouldMultiply: true, row: 1 },
                    { button: "btn2", value: 1.2, shouldMultiply: true, row: 2 },
                    { button: "btn3", value: 0.5, shouldMultiply: true, row: 3 },
                    { button: "btn4", value: 750, shouldMultiply: false, row: 4 },
                    { button: "btn5", value: 0, shouldMultiply: false, row: 5 },
                    { button: "btn6", value: 1.85, shouldMultiply: true, row: 1 },
                    { button: "btn7", value: 0.85, shouldMultiply: true, row: 2 },
                    { button: "btn8", value: 0.85, shouldMultiply: true, row: 3 },
                    { button: "btn9", value: 700, shouldMultiply: false, row: 4 },
                    { button: "btn10", value: 1, shouldMultiply: false, row: 5 },
                    { button: "btn11", value: 0.5, shouldMultiply: true, row: 1 },
                    { button: "btn12", value: 0.5, shouldMultiply: true, row: 2 },
                    { button: "btn13", value: 1.85, shouldMultiply: true, row: 3 },
                    { button: "btn14", value: 750, shouldMultiply: false, row: 4 },
                    { button: "btn15", value: 1, shouldMultiply: false, row: 5 }

                ]
            }, {
                screen: 3,
                buttons: [
                    { button: "btn1", value: 1.85, shouldMultiply: true, row: 1 },
                    { button: "btn2", value: 0.5, shouldMultiply: true, row: 2 },
                    { button: "btn3", value: 1.85, shouldMultiply: true, row: 3 },
                    { button: "btn4", value: 830, shouldMultiply: false, row: 4 },
                    { button: "btn5", value: 0, shouldMultiply: false, row: 5 },
                    { button: "btn6", value: 0.5, shouldMultiply: true, row: 1 },
                    { button: "btn7", value: 1.85, shouldMultiply: true, row: 2 },
                    { button: "btn8", value: 0.5, shouldMultiply: true, row: 3 },
                    { button: "btn9", value: 830, shouldMultiply: false, row: 4 },
                    { button: "btn10", value: 2, shouldMultiply: false, row: 5 },
                    { button: "btn11", value: 1.2, shouldMultiply: true, row: 1 },
                    { button: "btn12", value: 1.85, shouldMultiply: true, row: 2 },
                    { button: "btn13", value: 1.2, shouldMultiply: true, row: 3 },
                    { button: "btn14", value: 830, shouldMultiply: false, row: 4 },
                    { button: "btn15", value: 1, shouldMultiply: false, row: 5 },
                ]
            }, {
                screen: 4,
                buttons: [
                    { button: "btn1", value: 1.85, shouldMultiply: true, row: 1 },
                    { button: "btn2", value: 0.85, shouldMultiply: true, row: 2 },
                    { button: "btn3", value: 1.2, shouldMultiply: true, row: 3 },
                    { button: "btn4", value: 750, shouldMultiply: false, row: 4 },
                    { button: "btn5", value: 1, shouldMultiply: false, row: 5 },
                    { button: "btn6", value: 0.5, shouldMultiply: true, row: 1 },
                    { button: "btn7", value: 1.85, shouldMultiply: true, row: 2 },
                    { button: "btn8", value: 1.2, shouldMultiply: true, row: 3 },
                    { button: "btn9", value: 750, shouldMultiply: false, row: 4 },
                    { button: "btn10", value: 0, shouldMultiply: false, row: 5 },
                    { button: "btn11", value: 1.85, shouldMultiply: false, row: 1 },
                    { button: "btn12", value: 0.5, shouldMultiply: true, row: 2 },
                    { button: "btn13", value: 0.85, shouldMultiply: true, row: 3 },
                    { button: "btn14", value: 750, shouldMultiply: false, row: 4 },
                    { button: "btn15", value: 2, shouldMultiply: false, row: 5 },

                ]
            }, {
                screen: 5,
                buttons: [
                    { button: "btn1", value: 0.5, shouldMultiply: true, row: 1 },
                    { button: "btn2", value: 0.5, shouldMultiply: true, row: 2 },
                    { button: "btn3", value: 1.85, shouldMultiply: true, row: 3 },
                    { button: "btn4", value: 700, shouldMultiply: false, row: 4 },
                    { button: "btn5", value: 2, shouldMultiply: false, row: 5 },
                    { button: "btn6", value: 1.2, shouldMultiply: true, row: 1 },
                    { button: "btn7", value: 1.2, shouldMultiply: true, row: 2 },
                    { button: "btn8", value: 0.85, shouldMultiply: true, row: 3 },
                    { button: "btn9", value: 750, shouldMultiply: false, row: 4 },
                    { button: "btn10", value: 0, shouldMultiply: false, row: 5},
                    { button: "btn11", value: 0.85, shouldMultiply: true, row: 1 },
                    { button: "btn12", value: 1.85, shouldMultiply: true, row: 2 },
                    { button: "btn13", value: 0.5, shouldMultiply: true, row: 3 },
                    { button: "btn14", value: 700, shouldMultiply: false, row: 4 },
                    { button: "btn15", value: 0, shouldMultiply: false, row: 5 },


                ]
            },
            {
                screen: 6,
                buttons: [
                    { button: "btn1", value: 1.2, shouldMultiply: true, row: 1 },
                    { button: "btn2", value: 1.85, shouldMultiply: true, row: 1 },
                    { button: "btn3", value: 0.85, shouldMultiply: true, row: 1 },
                    { button: "btn4", value: 700, shouldMultiply: false, row: 1 },
                    { button: "btn5", value: 1, shouldMultiply: false, row: 1 },
                    { button: "btn6", value: 1.2, shouldMultiply: true, row: 1 },
                    { button: "btn7", value: 0.5, shouldMultiply: true, row: 1 },
                    { button: "btn8", value: 0.5, shouldMultiply: true, row: 1 },
                    { button: "btn9", value: 700, shouldMultiply: false, row: 1 },
                    { button: "btn10", value: 2, shouldMultiply: false, row: 1 },
                    { button: "btn11", value: 0.5, shouldMultiply: true, row: 1 },
                    { button: "btn12", value: 1.2, shouldMultiply: true, row: 1 },
                    { button: "btn13", value: 1.85, shouldMultiply: true, row: 1 },
                    { button: "btn14", value: 700, shouldMultiply: false, row: 1 },
                    { button: "btn15", value: 0, shouldMultiply: false, row: 1 },


                ]
            }, {
                screen: 7,
                buttons: [
                    { button: "btn1", value: 0.85, shouldMultiply: true, row: 1 },
                    { button: "btn2", value: 1.2, shouldMultiply: true, row: 1 },
                    { button: "btn3", value: 0.5, shouldMultiply: true, row: 1 },
                    { button: "btn4", value: 750, shouldMultiply: false, row: 1 },
                    { button: "btn5", value: 1, shouldMultiply: false, row: 1 },
                    { button: "btn6", value: 0.85, shouldMultiply: true, row: 1 },
                    { button: "btn7", value: 0.5, shouldMultiply: true, row: 1 },
                    { button: "btn8", value: 1.85, shouldMultiply: true, row: 1 },
                    { button: "btn9", value: 750, shouldMultiply: false, row: 1 },
                    { button: "btn10", value: 0, shouldMultiply: false, row: 1 },
                    { button: "btn11", value: 1.2, shouldMultiply: true, row: 1 },
                    { button: "btn12", value: 1.2, shouldMultiply: true, row: 1 },
                    { button: "btn13", value: 1.2, shouldMultiply: true, row: 1 },
                    { button: "btn14", value: 750, shouldMultiply: false, row: 1 },
                    { button: "btn15", value: 1, shouldMultiply: false, row: 1 }
                ]
            }, {
                screen: 8,
                buttons: [
                    { button: "btn1", value: 0.85, shouldMultiply: true, row: 1 },
                    { button: "btn2", value: 0.85, shouldMultiply: true, row: 1 },
                    { button: "btn3", value: 0.85, shouldMultiply: true, row: 1 },
                    { button: "btn4", value: 700, shouldMultiply: false, row: 1 },
                    { button: "btn5", value: 0, shouldMultiply: false, row: 1 },
                    { button: "btn6", value: 0.85, shouldMultiply: true, row: 1 },
                    { button: "btn7", value: 0.85, shouldMultiply: true, row: 1 },
                    { button: "btn8", value: 1.85, shouldMultiply: true, row: 1 },
                    { button: "btn9", value: 830, shouldMultiply: false, row: 1 },
                    { button: "btn10", value: 1, shouldMultiply: false, row: 1 },
                    { button: "btn11", value: 0.85, shouldMultiply: true, row: 1 },
                    { button: "btn12", value: 0.85, shouldMultiply: true, row: 1 },
                    { button: "btn13", value: 0.85, shouldMultiply: true, row: 1 },
                    { button: "btn14", value: 700, shouldMultiply: false, row: 1 },
                    { button: "btn15", value: 2, shouldMultiply: false, row: 1 },


                ]
            }
        ]
    },
    {
        interview: "click-tracker-34"
        , content: `
        <div class="form-group" id="formgroup12">
            <label for="">Tiempo de caminata [min]:</label>
            <div class="grupolabel">
                <input type="button"   name="btn1"  data-value="" value="Ver">
                <input type="button"   name="btn17" data-value="" value="Ver">
                <input type="button"   name="btn13" data-value="" value="Ver">
            </div>
        </div>
        <div class="form-group" id="formgroup13">
            <label for="">Tiempo de espera [min]:</label>            
            <div class="grupolabel">
                <input type="button"   name="btn2"  data-value="" value="Ver">
                <input type="button"   name="btn8"  data-value="" value="Ver">
                <input type="button"   name="btn14" data-value="" value="Ver">
            </div>
        </div>
        <div class="form-group" id="formgroup14">    
            <label for="">Tiempo de viaje [min]:</label>
            <div class="grupolabel">
                <input type="button"   name="btn3"  data-value="" value="Ver">
                <input type="button"   name="btn9"  data-value="" value="Ver">
                <input type="button"   name="btn15" data-value="" value="Ver">
            </div>
        </div>
        <div class="form-group" id="formgroup16">
            <label for="">Tarifa [$]:</label>
            <div class="grupolabel">  
                <input type="button"   name="btn4"  data-value="" value="Ver">
                <input type="button"   name="btn10" data-value="" value="Ver">
                <input type="button"   name="btn16" data-value="" value="Ver">
            </div>
        </div>

    `, screens: [
            {
                screen: 1,
                buttons: [

                    { btn1: 0.85, shouldMultiply: true },
                    { btn2: 1.85, shouldMultiply: true },
                    { btn3: 0.5, shouldMultiply: true },
                    { btn4: 830, shouldMultiply: false },
                    { btn5: 1.2, shouldMultiply: true },
                    { btn6: 1.2, shouldMultiply: true },
                    { btn7: 1.2, shouldMultiply: true },
                    { btn8: 830, shouldMultiply: false },
                    { btn9: 0.5, shouldMultiply: true },
                    { btn10: 0.5, shouldMultiply: true },
                    { btn11: 1.85, shouldMultiply: true },
                    { btn12: 730, shouldMultiply: false }
                ]
            },
            {
                screen: 2,
                buttons: [

                    { btn1: 0.85, shouldMultiply: true },
                    { btn2: 0.5, shouldMultiply: true },
                    { btn3: 0.85, shouldMultiply: true },
                    { btn4: 730, shouldMultiply: false },
                    { btn5: 0.85, shouldMultiply: true },
                    { btn6: 1.2, shouldMultiply: true },
                    { btn7: 0.85, shouldMultiply: true },
                    { btn8: 700, shouldMultiply: false },
                    { btn9: 0.85, shouldMultiply: true },
                    { btn10: 0.85, shouldMultiply: true },
                    { btn11: 1.2, shouldMultiply: true },
                    { btn12: 700, shouldMultiply: false }
                ]
            }, {
                screen: 3,
                buttons: [

                    { btn1: 0.5, shouldMultiply: true },
                    { btn2: 1.85, shouldMultiply: true },
                    { btn3: 1.2, shouldMultiply: true },
                    { btn4: 700, shouldMultiply: false },
                    { btn5: 1.85, shouldMultiply: true },
                    { btn6: 0.5, shouldMultiply: true },
                    { btn7: 0.5, shouldMultiply: true },
                    { btn8: 730, shouldMultiply: false },
                    { btn9: 1.85, shouldMultiply: true },
                    { btn10: 0.85, shouldMultiply: true },
                    { btn11: 0.85, shouldMultiply: true },
                    { btn12: 830, shouldMultiply: false }
                ]
            }, {
                screen: 4,

                buttons: [

                    { btn1: 1.2, shouldMultiply: true },
                    { btn2: 1.2, shouldMultiply: true },
                    { btn3: 1.2, shouldMultiply: true },
                    { btn4: 700, shouldMultiply: false },
                    { btn5: 0.85, shouldMultiply: true },
                    { btn6: 1.85, shouldMultiply: true },
                    { btn7: 1.2, shouldMultiply: true },
                    { btn8: 830, shouldMultiply: false },
                    { btn9: 1.85, shouldMultiply: true },
                    { btn10: 0.5, shouldMultiply: true },
                    { btn11: 0.5, shouldMultiply: true },
                    { btn12: 730, shouldMultiply: false }
                ]
            }, {
                screen: 5,
                buttons: [

                    { btn1: 1.85, shouldMultiply: true },
                    { btn2: 0.5, shouldMultiply: true },
                    { btn3: 0.85, shouldMultiply: true },
                    { btn4: 730, shouldMultiply: false },
                    { btn5: 0.5, shouldMultiply: true },
                    { btn6: 1.85, shouldMultiply: true },
                    { btn7: 0.85, shouldMultiply: true },
                    { btn8: 700, shouldMultiply: false },
                    { btn9: 0.85, shouldMultiply: true },
                    { btn10: 1.85, shouldMultiply: true },
                    { btn11: 1.2, shouldMultiply: true },
                    { btn12: 700, shouldMultiply: false }
                ]
            },
            {
                screen: 6,
                buttons: [

                    { btn1: 1.85, shouldMultiply: true },
                    { btn2: 1.2, shouldMultiply: true },
                    { btn3: 0.5, shouldMultiply: true },
                    { btn4: 700, shouldMultiply: false },
                    { btn5: 0.5, shouldMultiply: true },
                    { btn6: 0.85, shouldMultiply: true },
                    { btn7: 1.85, shouldMultiply: true },
                    { btn8: 730, shouldMultiply: false },
                    { btn9: 1.2, shouldMultiply: true },
                    { btn10: 1.2, shouldMultiply: true },
                    { btn11: 1.85, shouldMultiply: true },
                    { btn12: 700, shouldMultiply: false }
                ]
            }, {
                screen: 7,

                buttons: [

                    { btn1: 1.2, shouldMultiply: true },
                    { btn2: 0.85, shouldMultiply: true },
                    { btn3: 1.85, shouldMultiply: true },
                    { btn4: 730, shouldMultiply: false },
                    { btn5: 1.2, shouldMultiply: true },
                    { btn6: 0.5, shouldMultiply: true },
                    { btn7: 1.85, shouldMultiply: true },
                    { btn8: 730, shouldMultiply: false },
                    { btn9: 0.5, shouldMultiply: true },
                    { btn10: 1.85, shouldMultiply: true },
                    { btn11: 0.5, shouldMultiply: true },
                    { btn12: 730, shouldMultiply: false }
                ]
            }, {
                screen: 8,

                buttons: [

                    { btn1: 0.5, shouldMultiply: true },
                    { btn2: 0.85, shouldMultiply: true },
                    { btn3: 1.85, shouldMultiply: true },
                    { btn4: 830, shouldMultiply: false },
                    { btn5: 1.85, shouldMultiply: true },
                    { btn6: 0.85, shouldMultiply: true },
                    { btn7: 0.5, shouldMultiply: true },
                    { btn8: 700, shouldMultiply: false },
                    { btn9: 1.2, shouldMultiply: true },
                    { btn10: 1.2, shouldMultiply: true },
                    { btn11: 0.85, shouldMultiply: true },
                    { btn12: 830, shouldMultiply: false }
                ]
            }

        ]
    },

    {
        interview: "click-tracker-33"
        , content: `
        <div class="form-group" id="formgroup17">
            <label for="">Tiempo de caminata [min]:</label>
            <div class="grupolabel">
                <input type="button"   name="btn1"  data-value="" value="Ver">
                <input type="button"   name="btn17" data-value="" value="Ver">
                <input type="button"   name="btn13" data-value="" value="Ver">
            </div>
        </div>
        <div class="form-group" id="formgroup18">
            <label for="">Tiempo de espera [min]:</label>            
            <div class="grupolabel">
                <input type="button"   name="btn2"  data-value="" value="Ver">
                <input type="button"   name="btn8"  data-value="" value="Ver">
                <input type="button"   name="btn14" data-value="" value="Ver">
            </div>
        </div>
        <div class="form-group" id="formgroup19">    
            <label for="">Tiempo de viaje [min]:</label>
            <div class="grupolabel">
                <input type="button"   name="btn3"  data-value="" value="Ver">
                <input type="button"   name="btn9"  data-value="" value="Ver">
                <input type="button"   name="btn15" data-value="" value="Ver">
            </div>
        </div>
 
    `, screens: [
            {
                screen: 1,

                buttons: [

                    { btn1: 0.5, shouldMultiply: true },
                    { btn2: 1.2, shouldMultiply: true },
                    { btn3: 750, shouldMultiply: false },
                    { btn4: 1.85, shouldMultiply: true },
                    { btn5: 0.5, shouldMultiply: true },
                    { btn6: 750, shouldMultiply: false },
                    { btn7: 0.85, shouldMultiply: true },
                    { btn8: 1.85, shouldMultiply: true },
                    { btn9: 750, shouldMultiply: false }
                ]
            },
            {
                screen: 2,

                buttons: [



                    { btn1: 1.2, shouldMultiply: true },
                    { btn2: 1.85, shouldMultiply: true },
                    { btn3: 700, shouldMultiply: false },
                    { btn4: 0.5, shouldMultiply: true },
                    { btn5: 1.85, shouldMultiply: true },
                    { btn6: 830, shouldMultiply: false },
                    { btn7: 1.85, shouldMultiply: true },
                    { btn8: 0.5, shouldMultiply: true },
                    { btn9: 750, shouldMultiply: false }
                ]
            }, {
                screen: 3,

                buttons: [

                    { btn1: 0.85, shouldMultiply: true },
                    { btn2: 0.5, shouldMultiply: true },
                    { btn3: 700, shouldMultiply: false },
                    { btn4: 0.85, shouldMultiply: true },
                    { btn5: 0.85, shouldMultiply: true },
                    { btn6: 750, shouldMultiply: false },
                    { btn7: 1.2, shouldMultiply: true },
                    { btn8: 0.85, shouldMultiply: true },
                    { btn9: 700, shouldMultiply: false }
                ]
            }, {
                screen: 4,

                buttons: [

                    { btn1: 1.2, shouldMultiply: true },
                    { btn2: 1.2, shouldMultiply: true },
                    { btn3: 750, shouldMultiply: false },
                    { btn4: 1.2, shouldMultiply: true },
                    { btn5: 0.5, shouldMultiply: true },
                    { btn6: 830, shouldMultiply: false },
                    { btn7: 0.5, shouldMultiply: true },
                    { btn8: 1.85, shouldMultiply: true },
                    { btn9: 700, shouldMultiply: false }
                ]
            }, {
                screen: 5,

                buttons: [

                    { btn1: 1.85, shouldMultiply: true },
                    { btn2: 0.5, shouldMultiply: true },
                    { btn3: 830, shouldMultiply: true },
                    { btn4: 1.2, shouldMultiply: false },
                    { btn5: 1.2, shouldMultiply: false },
                    { btn6: 700, shouldMultiply: false },
                    { btn7: 0.5, shouldMultiply: true },
                    { btn8: 0.85, shouldMultiply: true },
                    { btn9: 750, shouldMultiply: true }

                ]
            },
            {
                screen: 6,

                buttons: [



                    { btn1: 0.85, shouldMultiply: true },
                    { btn2: 0.85, shouldMultiply: true },
                    { btn3: 830, shouldMultiply: false },
                    { btn4: 1.85, shouldMultiply: true },
                    { btn5: 0.85, shouldMultiply: true },
                    { btn6: 700, shouldMultiply: false },
                    { btn7: 0.85, shouldMultiply: true },
                    { btn8: 1.2, shouldMultiply: true },
                    { btn9: 830, shouldMultiply: false }
                ]
            }, {
                screen: 7,

                buttons: [



                    { btn1: 1.85, shouldMultiply: true },
                    { btn2: 0.85, shouldMultiply: true },
                    { btn3: 700, shouldMultiply: false },
                    { btn4: 0.5, shouldMultiply: true },
                    { btn5: 1.2, shouldMultiply: true },
                    { btn6: 700, shouldMultiply: false },
                    { btn7: 1.2, shouldMultiply: true },
                    { btn8: 1.2, shouldMultiply: true },
                    { btn9: 830, shouldMultiply: false }
                ]
            }, {
                screen: 8,

                buttons: [



                    { btn1: 0.5, shouldMultiply: true },
                    { btn2: 1.85, shouldMultiply: true },
                    { btn3: 750, shouldMultiply: false },
                    { btn4: 0.85, shouldMultiply: true },
                    { btn5: 1.85, shouldMultiply: true },
                    { btn6: 750, shouldMultiply: false },
                    { btn7: 1.85, shouldMultiply: true },
                    { btn8: 0.5, shouldMultiply: true },
                    { btn9: 700, shouldMultiply: false }
                ]
            }
        ]
    },

    {
        interview: "click-tracker-32"
        , content: `
        <div class="form-group" id="formgroup20">
            <label for="">Tiempo de caminata [min]:</label>
            <div class="grupolabel">
                <input type="button"   name="btn1"  data-value="" value="Ver">
                <input type="button"   name="btn17" data-value="" value="Ver">
                <input type="button"   name="btn13" data-value="" value="Ver">
            </div>
        </div>
        <div class="form-group" id="formgroup21">
            <label for="">Tiempo de espera [min]:</label>            
            <div class="grupolabel">
                <input type="button"   name="btn2"  data-value="" value="Ver">
                <input type="button"   name="btn8"  data-value="" value="Ver">
                <input type="button"   name="btn14" data-value="" value="Ver">
            </div>
        </div>

    `, screens: [
            {
                screen: 1,

                buttons: [



                    { btn1: 1.85, shouldMultiply: true },
                    { btn2: 750, shouldMultiply: false },
                    { btn3: 1.2, shouldMultiply: true },
                    { btn4: 750, shouldMultiply: false },
                    { btn5: 1.85, shouldMultiply: true },
                    { btn6: 750, shouldMultiply: false }
                ]
            },
            {
                screen: 2,

                buttons: [



                    { btn1: 0.5, shouldMultiply: true },
                    { btn2: 750, shouldMultiply: false },
                    { btn3: 0.85, shouldMultiply: true },
                    { btn4: 700, shouldMultiply: false },
                    { btn5: 0.85, shouldMultiply: true },
                    { btn6: 700, shouldMultiply: false }
                ]
            }, {
                screen: 3,

                buttons: [



                    { btn1: 1.85, shouldMultiply: true },
                    { btn2: 750, shouldMultiply: false },
                    { btn3: 1.85, shouldMultiply: true },
                    { btn4: 750, shouldMultiply: false },
                    { btn5: 1.2, shouldMultiply: true },
                    { btn6: 700, shouldMultiply: false }
                ]
            }, {
                screen: 4,

                buttons: [



                    { btn1: 1.2, shouldMultiply: true },
                    { btn2: 700, shouldMultiply: false },
                    { btn3: 0.5, shouldMultiply: true },
                    { btn4: 830, shouldMultiply: false },
                    { btn5: 0.85, shouldMultiply: true },
                    { btn6: 830, shouldMultiply: false }
                ]
            }, {
                screen: 5,

                buttons: [



                    { btn1: 0.85, shouldMultiply: true },
                    { btn2: 700, shouldMultiply: false },
                    { btn3: 0.85, shouldMultiply: true },
                    { btn4: 750, shouldMultiply: false },
                    { btn5: 0.5, shouldMultiply: true },
                    { btn6: 700, shouldMultiply: false }

                ]
            },
            {
                screen: 6,

                buttons: [



                    { btn1: 0.85, shouldMultiply: true },
                    { btn2: 830, shouldMultiply: false },
                    { btn3: 1.2, shouldMultiply: true },
                    { btn4: 700, shouldMultiply: false },
                    { btn5: 1.2, shouldMultiply: true },
                    { btn6: 750, shouldMultiply: false }
                ]
            }, {
                screen: 7,

                buttons: [



                    { btn1: 0.5, shouldMultiply: true },
                    { btn2: 700, shouldMultiply: false },
                    { btn3: 0.5, shouldMultiply: true },
                    { btn4: 830, shouldMultiply: false },
                    { btn5: 0.5, shouldMultiply: true },
                    { btn6: 830, shouldMultiply: false }
                ]
            }, {
                screen: 8,

                buttons: [



                    { btn1: 1.2, shouldMultiply: true },
                    { btn2: 830, shouldMultiply: false },
                    { btn3: 1.85, shouldMultiply: true },
                    { btn4: 700, shouldMultiply: false },
                    { btn5: 1.85, shouldMultiply: true },
                    { btn6: 750, shouldMultiply: false }
                ]
            }
        ]

    },

    {
        interview: "click-tracker-26"
        , content: `
        <div class="form-group" id="formgroup22">
            <label for="">Tiempo de caminata [min]:</label>
            <div class="grupolabel">
                <input type="button"   name="btn1"  data-value="" value="Ver">
                <input type="button"   name="btn17" data-value="" value="Ver">
            </div>
        </div>
        <div class="form-group" id="formgroup23">
            <label for="">Tiempo de espera [min]:</label>            
            <div class="grupolabel">
                <input type="button"   name="btn2"  data-value="" value="Ver">
                <input type="button"   name="btn8"  data-value="" value="Ver">
            </div>
        </div>
        <div class="form-group" id="formgroup24">    
            <label for="">Tiempo de viaje [min]:</label>
            <div class="grupolabel">
                <input type="button"   name="btn3"  data-value="" value="Ver">
                <input type="button"   name="btn9"  data-value="" value="Ver">
            </div>
        </div>
        <div class="form-group" id="formgroup25">
            <label for="">Tarifa [$]:</label>
            <div class="grupolabel" > 
                <input type="button"   name="btn4"  data-value="" value="Ver">
                <input type="button"   name="btn10" data-value="" value="Ver">
            </div>
        </div>
        <div class="form-group" id="formgroup26">
            <label for="">Trasbordo [-]:</label>
            <div class="grupolabel">
                <input type="button"   name="btn5"  data-value="" value="Ver">
                <input type="button"   name="btn11" data-value="" value="Ver">
            </div>
        </div>
        <div class="form-group" id="formgroup27">
            <label for="">¿Hay asiento?</label>
            <div class="grupolabel">
                <input type="button"   name="btn6"  data-value="" value="Ver">
                <input type="button"   name="btn12" data-value="" value="Ver">
            </div>
        </div>
    
    `, screens: [
            {
                screen: 1,

                buttons: [



                    { btn1: 0.5, shouldMultiply: true },
                    { btn2: 1.2, shouldMultiply: true },
                    { btn3: 0.5, shouldMultiply: true },
                    { btn4: 700, shouldMultiply: false },
                    { btn5: 0, shouldMultiply: false },
                    { btn6: 1, shouldMultiply: false },
                    { btn7: 1.85, shouldMultiply: true },
                    { btn8: 1.85, shouldMultiply: true },
                    { btn9: 1.85, shouldMultiply: true },
                    { btn10: 830, shouldMultiply: false },
                    { btn11: 2, shouldMultiply: false },
                    { btn12: 0, shouldMultiply: false }
                ]
            },
            {
                screen: 2,

                buttons: [



                    { btn1: 1.85, shouldMultiply: true },
                    { btn2: 1.85, shouldMultiply: true },
                    { btn3: 1.85, shouldMultiply: true },
                    { btn4: 830, shouldMultiply: false },
                    { btn5: 2, shouldMultiply: false },
                    { btn6: 0, shouldMultiply: false },
                    { btn7: 0.5, shouldMultiply: true },
                    { btn8: 0.5, shouldMultiply: true },
                    { btn9: 0.5, shouldMultiply: true },
                    { btn10: 830, shouldMultiply: false },
                    { btn11: 0, shouldMultiply: false },
                    { btn12: 0, shouldMultiply: false }
                ]
            }, {
                screen: 3,

                buttons: [



                    { btn1: 0.5, shouldMultiply: true },
                    { btn2: 0.5, shouldMultiply: true },
                    { btn3: 1.2, shouldMultiply: true },
                    { btn4: 700, shouldMultiply: false },
                    { btn5: 0, shouldMultiply: false },
                    { btn6: 1, shouldMultiply: false },
                    { btn7: 0.85, shouldMultiply: true },
                    { btn8: 0.85, shouldMultiply: true },
                    { btn9: 0.85, shouldMultiply: true },
                    { btn10: 700, shouldMultiply: false },
                    { btn11: 0, shouldMultiply: false },
                    { btn12: 0, shouldMultiply: false }
                ]
            }, {
                screen: 4,

                buttons: [



                    { btn1: 1.2, shouldMultiply: true },
                    { btn2: 1.2, shouldMultiply: true },
                    { btn3: 1.2, shouldMultiply: true },
                    { btn4: 770, shouldMultiply: false },
                    { btn5: 1, shouldMultiply: false },
                    { btn6: 1, shouldMultiply: false },
                    { btn7: 0.85, shouldMultiply: true },
                    { btn8: 0.85, shouldMultiply: true },
                    { btn9: 0.85, shouldMultiply: true },
                    { btn10: 700, shouldMultiply: false },
                    { btn11: 0, shouldMultiply: false },
                    { btn12: 0, shouldMultiply: false }
                ]
            }, {
                screen: 5,

                buttons: [



                    { btn1: 0.85, shouldMultiply: true },
                    { btn2: 0.85, shouldMultiply: true },
                    { btn3: 0.85, shouldMultiply: true },
                    { btn4: 770, shouldMultiply: false },
                    { btn5: 1, shouldMultiply: false },
                    { btn6: 0, shouldMultiply: false },
                    { btn7: 1.2, shouldMultiply: true },
                    { btn8: 1.2, shouldMultiply: true },
                    { btn9: 1.2, shouldMultiply: true },
                    { btn10: 770, shouldMultiply: false },
                    { btn11: 1, shouldMultiply: false },
                    { btn12: 1, shouldMultiply: false },
                ]
            },
            {
                screen: 6,

                buttons: [



                    { btn1: 1.2, shouldMultiply: true },
                    { btn2: 0.5, shouldMultiply: true },
                    { btn3: 0.5, shouldMultiply: true },
                    { btn4: 700, shouldMultiply: false },
                    { btn5: 0, shouldMultiply: false },
                    { btn6: 1, shouldMultiply: false },
                    { btn7: 1.2, shouldMultiply: true },
                    { btn8: 1.2, shouldMultiply: true },
                    { btn9: 1.2, shouldMultiply: true },
                    { btn10: 770, shouldMultiply: false },
                    { btn11: 1, shouldMultiply: false },
                    { btn12: 1, shouldMultiply: false }

                ]
            }, {
                screen: 7,

                buttons: [



                    { btn1: 0.85, shouldMultiply: true },
                    { btn2: 0.85, shouldMultiply: true },
                    { btn3: 0.85, shouldMultiply: true },
                    { btn4: 770, shouldMultiply: false },
                    { btn5: 1, shouldMultiply: false },
                    { btn6: 0, shouldMultiply: false },
                    { btn7: 1.85, shouldMultiply: true },
                    { btn8: 1.85, shouldMultiply: true },
                    { btn9: 1.85, shouldMultiply: true },
                    { btn10: 770, shouldMultiply: false },
                    { btn11: 1, shouldMultiply: false },
                    { btn12: 1, shouldMultiply: false }
                ]
            }, {
                screen: 8,

                buttons: [



                    { btn1: 1.85, shouldMultiply: true },
                    { btn2: 1.85, shouldMultiply: true },
                    { btn3: 1.85, shouldMultiply: true },
                    { btn4: 830, shouldMultiply: false },
                    { btn5: 2, shouldMultiply: false },
                    { btn6: 0, shouldMultiply: false },
                    { btn7: 0.5, shouldMultiply: true },
                    { btn8: 0.5, shouldMultiply: true },
                    { btn9: 0.5, shouldMultiply: true },
                    { btn10: 700, shouldMultiply: false },
                    { btn11: 2, shouldMultiply: false },
                    { btn12: 1, shouldMultiply: false }
                ]
            }
        ]

    },

    {
        interview: "click-tracker-25"
        , content: `
        <div class="form-group" id="formgroup28">
            <label for="">Tiempo de caminata [min]:</label>
            <div class="grupolabel">
                <input type="button"   name="btn1"  data-value="" value="Ver">
                <input type="button"   name="btn17" data-value="" value="Ver">
            </div>
        </div>
        <div class="form-group" id="formgroup29">
            <label for="">Tiempo de espera [min]:</label>            
            <div class="grupolabel">
                <input type="button"   name="btn2"  data-value="" value="Ver">
                <input type="button"   name="btn8"  data-value="" value="Ver">
            </div>
        </div>
        <div class="form-group" id="formgroup30">    
            <label for="">Tiempo de viaje [min]:</label>
            <div class="grupolabel">
                <input type="button"   name="btn3"  data-value="" value="Ver">
                <input type="button"   name="btn9"  data-value="" value="Ver">
            </div>
        </div>
        <div class="form-group" id="formgroup31">
            <label for="">Tarifa [$]:</label>
            <div class="grupolabel">  
                <input type="button"   name="btn4"  data-value="" value="Ver">
                <input type="button"   name="btn10" data-value="" value="Ver">
            </div>
        </div>
        <div class="form-group" id="formgroup32">
            <label for="">Trasbordo [-]:</label>
            <div class="grupolabel">
                <input type="button"   name="btn5"  data-value="" value="Ver">
                <input type="button"   name="btn11" data-value="" value="Ver">
            </div>
        </div>
    `, screens: [
            {
                screen: 1,

                buttons: [



                    { btn1: 0.5, shouldMultiply: true },
                    { btn2: 1.2, shouldMultiply: true },
                    { btn3: 1.85, shouldMultiply: true },
                    { btn4: 700, shouldMultiply: false },
                    { btn5: 2, shouldMultiply: false },
                    { btn6: 1.85, shouldMultiply: true },
                    { btn7: 0.85, shouldMultiply: true },
                    { btn8: 0.5, shouldMultiply: true },
                    { btn9: 830, shouldMultiply: false },
                    { btn10: 0, shouldMultiply: false }
                ]
            },
            {
                screen: 2,

                buttons: [



                    { btn1: 1.85, shouldMultiply: true },
                    { btn2: 1.85, shouldMultiply: true },
                    { btn3: 0.5, shouldMultiply: true },
                    { btn4: 700, shouldMultiply: false },
                    { btn5: 0, shouldMultiply: false },
                    { btn6: 0.85, shouldMultiply: true },
                    { btn7: 0.5, shouldMultiply: true },
                    { btn8: 1.85, shouldMultiply: true },
                    { btn9: 830, shouldMultiply: false },
                    { btn10: 1, shouldMultiply: false }

                ]
            }, {
                screen: 3,

                buttons: [



                    { btn1: 1.85, shouldMultiply: true },
                    { btn2: 0.5, shouldMultiply: true },
                    { btn3: 1.2, shouldMultiply: true },
                    { btn4: 700, shouldMultiply: false },
                    { btn5: 0, shouldMultiply: false },
                    { btn6: 0.5, shouldMultiply: true },
                    { btn7: 1.85, shouldMultiply: true },
                    { btn7: 0.5, shouldMultiply: true },
                    { btn9: 750, shouldMultiply: false },
                    { btn10: 2, shouldMultiply: false }
                ]
            }, {
                screen: 4,

                buttons: [



                    { btn1: 0.85, shouldMultiply: true },
                    { btn2: 1.2, shouldMultiply: true },
                    { btn3: 0.5, shouldMultiply: true },
                    { btn4: 750, shouldMultiply: false },
                    { btn5: 1, shouldMultiply: false },
                    { btn6: 1.2, shouldMultiply: true },
                    { btn7: 0.85, shouldMultiply: true },
                    { btn8: 1.2, shouldMultiply: true },
                    { btn9: 750, shouldMultiply: false },
                    { btn10: 1, shouldMultiply: false }
                ]
            }, {
                screen: 5,

                buttons: [



                    { btn1: 0.5, shouldMultiply: true },
                    { btn2: 0.85, shouldMultiply: true },
                    { btn3: 1.2, shouldMultiply: true },
                    { btn4: 750, shouldMultiply: false },
                    { btn5: 1, shouldMultiply: false },
                    { btn6: 1.2, shouldMultiply: true },
                    { btn7: 1.2, shouldMultiply: true },
                    { btn8: 0.85, shouldMultiply: true },
                    { btn9: 700, shouldMultiply: false },
                    { btn10: 1, shouldMultiply: false }

                ]
            },
            {
                screen: 6,

                buttons: [



                    { btn1: 1.2, shouldMultiply: true },
                    { btn2: 0.5, shouldMultiply: true },
                    { btn3: 0.85, shouldMultiply: true },
                    { btn4: 750, shouldMultiply: false },
                    { btn5: 1, shouldMultiply: false },
                    { btn6: 0.85, shouldMultiply: true },
                    { btn7: 1.85, shouldMultiply: true },
                    { btn8: 1.2, shouldMultiply: true },
                    { btn9: 750, shouldMultiply: false },
                    { btn10: 0, shouldMultiply: false }
                ]
            }, {
                screen: 7,

                buttons: [



                    { btn1: 1.2, shouldMultiply: true },
                    { btn2: 0.85, shouldMultiply: true },
                    { btn3: 0.85, shouldMultiply: true },
                    { btn4: 830, shouldMultiply: false },
                    { btn5: 2, shouldMultiply: false },
                    { btn6: 0.5, shouldMultiply: true },
                    { btn7: 1.2, shouldMultiply: true },
                    { btn8: 1.85, shouldMultiply: true },
                    { btn9: 700, shouldMultiply: false },
                    { btn10: 0, shouldMultiply: false }
                ]
            }, {
                screen: 8,

                buttons: [



                    { btn1: 0.85, shouldMultiply: true },
                    { btn2: 1.85, shouldMultiply: true },
                    { btn3: 1.85, shouldMultiply: true },
                    { btn4: 830, shouldMultiply: false },
                    { btn5: 0, shouldMultiply: false },
                    { btn6: 1.85, shouldMultiply: true },
                    { btn7: 0.5, shouldMultiply: true },
                    { btn7: 0.85, shouldMultiply: true },
                    { btn9: 700, shouldMultiply: false },
                    { btn10: 2, shouldMultiply: false }
                ]
            }

        ]
    },

    {
        interview: "click-tracker-24"
        , content: `
        <div class="form-group" id="formgroup33">
            <label for="">Tiempo de caminata [min]:</label>
            <div class="grupolabel">
                <input type="button"   name="btn1"  data-value="" value="Ver">
                <input type="button"   name="btn17" data-value="" value="Ver">
            </div>
        </div>
        <div class="form-group" id="formgroup34">
            <label for="">Tiempo de espera [min]:</label>            
            <div class="grupolabel">
                <input type="button"   name="btn2"  data-value="" value="Ver">
                <input type="button"   name="btn8"  data-value="" value="Ver">
            </div>
        </div>
        <div class="form-group" id="formgroup35">    
            <label for="">Tiempo de viaje [min]:</label>
            <div class="grupolabel">
                <input type="button"   name="btn3"  data-value="" value="Ver">
                <input type="button"   name="btn9"  data-value="" value="Ver">
            </div>
        </div>
        <div class="form-group" id="formgroup36">
            <label for="">Tarifa [$]:</label>
            <div class="grupolabel" > 
                <input type="button"   name="btn4"  data-value="" value="Ver">
                <input type="button"   name="btn10" data-value="" value="Ver">
            </div>
        </div>
    `, screens: [
            {
                screen: 1,

                buttons: [



                    { btn1: 1.85, shouldMultiply: true },
                    { btn2: 1.2, shouldMultiply: true },
                    { btn3: 1.85, shouldMultiply: true },
                    { btn4: 830, shouldMultiply: false },
                    { btn5: 0.85, shouldMultiply: true },
                    { btn6: 0.5, shouldMultiply: true },
                    { btn7: 0.85, shouldMultiply: true },
                    { btn8: 700, shouldMultiply: false }

                ]
            },
            {
                screen: 2,

                buttons: [



                    { btn1: 1.2, shouldMultiply: true },
                    { btn2: 0.5, shouldMultiply: true },
                    { btn3: 0.5, shouldMultiply: true },
                    { btn4: 700, shouldMultiply: false },
                    { btn5: 1.2, shouldMultiply: true },
                    { btn6: 1.2, shouldMultiply: true },
                    { btn7: 1.2, shouldMultiply: true },
                    { btn8: 730, shouldMultiply: false }

                ]
            }, {
                screen: 3,

                buttons: [



                    { btn1: 1.85, shouldMultiply: true },
                    { btn2: 0.85, shouldMultiply: true },
                    { btn3: 1.2, shouldMultiply: true },
                    { btn4: 730, shouldMultiply: false },
                    { btn5: 1.2, shouldMultiply: true },
                    { btn6: 0.85, shouldMultiply: true },
                    { btn7: 1.2, shouldMultiply: true },
                    { btn8: 730, shouldMultiply: false }

                ]
            }, {
                screen: 4,

                buttons: [



                    { btn1: 0.5, shouldMultiply: true },
                    { btn2: 0.85, shouldMultiply: true },
                    { btn3: 0.5, shouldMultiply: true },
                    { btn4: 830, shouldMultiply: false },
                    { btn5: 1.85, shouldMultiply: true },
                    { btn6: 1.85, shouldMultiply: true },
                    { btn7: 1.85, shouldMultiply: true },
                    { btn8: 830, shouldMultiply: false }

                ]
            }, {
                screen: 5,

                buttons: [



                    { btn1: 0.85, shouldMultiply: true },
                    { btn2: 1.85, shouldMultiply: true },
                    { btn3: 0.85, shouldMultiply: true },
                    { btn4: 730, shouldMultiply: false },
                    { btn5: 0.85, shouldMultiply: true },
                    { btn6: 0.85, shouldMultiply: true },
                    { btn7: 0.85, shouldMultiply: true },
                    { btn8: 700, shouldMultiply: false }

                ]
            },
            {
                screen: 6,

                buttons: [



                    { btn1: 0.5, shouldMultiply: true },
                    { btn2: 0.5, shouldMultiply: true },
                    { btn3: 1.85, shouldMultiply: true },
                    { btn4: 700, shouldMultiply: false },
                    { btn5: 0.5, shouldMultiply: true },
                    { btn6: 1.2, shouldMultiply: true },
                    { btn7: 0.5, shouldMultiply: true },
                    { btn8: 700, shouldMultiply: false }
                ]
            }, {
                screen: 7,

                buttons: [



                    { btn1: 0.85, shouldMultiply: true },
                    { btn2: 1.85, shouldMultiply: true },
                    { btn3: 0.85, shouldMultiply: true },
                    { btn4: 700, shouldMultiply: false },
                    { btn5: 1.85, shouldMultiply: true },
                    { btn6: 1.85, shouldMultiply: true },
                    { btn7: 1.85, shouldMultiply: true },
                    { btn8: 730, shouldMultiply: false }
                ]
            }, {
                screen: 8,

                buttons: [



                    { btn1: 1.2, shouldMultiply: true },
                    { btn2: 1.2, shouldMultiply: true },
                    { btn3: 1.2, shouldMultiply: true },
                    { btn4: 730, shouldMultiply: false },
                    { btn5: 0.5, shouldMultiply: true },
                    { btn6: 0.5, shouldMultiply: true },
                    { btn7: 0.5, shouldMultiply: true },
                    { btn8: 830, shouldMultiply: false }
                ]
            }
        ]
    },

    {
        interview: "click-tracker-23"
        , content: `
        <div class="form-group">
            <label for="">Tiempo de caminata [min]:</label>
            <div class="grupolabel">
                <input type="button"   name="btn1"  data-value="" value="Ver">
                <input type="button"   name="btn17" data-value="" value="Ver">
            </div>
        </div>
        <div class="form-group">
            <label for="">Tiempo de espera [min]:</label>            
            <div class="grupolabel">
                <input type="button"   name="btn2"  data-value="" value="Ver">
                <input type="button"   name="btn8"  data-value="" value="Ver">
            </div>
        </div>
        <div class="form-group">    
            <label for="">Tiempo de viaje [min]:</label>
            <div class="grupolabel">
                <input type="button"   name="btn3"  data-value="" value="Ver">
                <input type="button"   name="btn9"  data-value="" value="Ver">
            </div>
        </div>
    `, screens: [
            {
                screen: 1,

                buttons: [



                    { btn1: 0.85, shouldMultiply: true },
                    { btn2: 1.85, shouldMultiply: true },
                    { btn3: 750, shouldMultiply: false },
                    { btn4: 0.5, shouldMultiply: true },
                    { btn5: 0.5, shouldMultiply: true },
                    { btn6: 830, shouldMultiply: false }

                ]
            },
            {
                screen: 2,

                buttons: [



                    { btn1: 1.85, shouldMultiply: true },
                    { btn2: 1.85, shouldMultiply: true },
                    { btn3: 830, shouldMultiply: false },
                    { btn4: 0.5, shouldMultiply: true },
                    { btn5: 0.85, shouldMultiply: true },
                    { btn6: 700, shouldMultiply: false }

                ]
            }, {
                screen: 3,

                buttons: [



                    { btn1: 0.85, shouldMultiply: true },
                    { btn2: 1.2, shouldMultiply: true },
                    { btn3: 750, shouldMultiply: false },
                    { btn4: 0.85, shouldMultiply: true },
                    { btn5: 0.5, shouldMultiply: true },
                    { btn6: 700, shouldMultiply: false }

                ]
            }, {
                screen: 4,

                buttons: [



                    { btn1: 1.2, shouldMultiply: true },
                    { btn2: 0.85, shouldMultiply: true },
                    { btn3: 700, shouldMultiply: false },
                    { btn4: 1.2, shouldMultiply: true },
                    { btn5: 1.2, shouldMultiply: true },
                    { btn6: 750, shouldMultiply: false }

                ]
            }, {
                screen: 5,

                buttons: [



                    { btn1: 1.85, shouldMultiply: true },
                    { btn2: 0.85, shouldMultiply: true },
                    { btn3: 750, shouldMultiply: false },
                    { btn4: 0.85, shouldMultiply: true },
                    { btn5: 0.85, shouldMultiply: true },
                    { btn6: 700, shouldMultiply: false }

                ]
            },
            {
                screen: 6,

                buttons: [



                    { btn1: 0.5, shouldMultiply: true },
                    { btn2: 1.2, shouldMultiply: true },
                    { btn3: 700, shouldMultiply: false },
                    { btn4: 1.85, shouldMultiply: true },
                    { btn5: 1.85, shouldMultiply: true },
                    { btn6: 750, shouldMultiply: false }

                ]
            }, {
                screen: 7,

                buttons: [



                    { btn1: 0.5, shouldMultiply: true },
                    { btn2: 0.5, shouldMultiply: true },
                    { btn3: 830, shouldMultiply: false },
                    { btn4: 1.2, shouldMultiply: true },
                    { btn5: 1.2, shouldMultiply: true },
                    { btn6: 750, shouldMultiply: false }

                ]
            }, {
                screen: 8,

                buttons: [



                    { btn1: 1.2, shouldMultiply: true },
                    { btn2: 0.5, shouldMultiply: true },
                    { btn3: 700, shouldMultiply: false },
                    { btn4: 1.85, shouldMultiply: true },
                    { btn5: 1.85, shouldMultiply: true },
                    { btn6: 830, shouldMultiply: false }

                ]
            }

        ]
    },

    {
        interview: "click-tracker-22"
        , content: `
        <div class="form-group" id="formgroup37">
            <label for="">Tiempo de caminata [min]:</label>
            <div class="grupolabel">
                <input type="button"   name="btn1"  data-value="" value="Ver">
                <input type="button"   name="btn17" data-value="" value="Ver">
            </div>
        </div>
        <div class="form-group" id="formgroup38">
            <label for="">Tiempo de espera [min]:</label>            
            <div class="grupolabel">
                <input type="button"   name="btn2"  data-value="" value="Ver">
                <input type="button"   name="btn8"  data-value="" value="Ver">
            </div>
        </div>
    `, screens: [
            {
                screen: 1,

                buttons: [



                    { btn1: 0.5, shouldMultiply: true },
                    { btn2: 830, shouldMultiply: false },
                    { btn3: 1.2, shouldMultiply: true },
                    { btn4: 750, shouldMultiply: false }

                ]
            },
            {
                screen: 2,

                buttons: [



                    { btn1: 0.5, shouldMultiply: true },
                    { btn2: 830, shouldMultiply: false },
                    { btn3: 1.85, shouldMultiply: true },
                    { btn4: 750, shouldMultiply: false }

                ]
            }, {
                screen: 3,

                buttons: [



                    { btn1: 1.85, shouldMultiply: true },
                    { btn2: 750, shouldMultiply: false },
                    { btn3: 0.5, shouldMultiply: true },
                    { btn4: 830, shouldMultiply: false }

                ]
            }, {
                screen: 4,

                buttons: [



                    { btn1: 1.2, shouldMultiply: true },
                    { btn2: 750, shouldMultiply: false },
                    { btn3: 0.5, shouldMultiply: true },
                    { btn4: 830, shouldMultiply: false }

                ]
            }, {
                screen: 5,

                buttons: [



                    { btn1: 1.2, shouldMultiply: true },
                    { btn2: 700, shouldMultiply: false },
                    { btn3: 0.85, shouldMultiply: true },
                    { btn4: 750, shouldMultiply: false }

                ]
            },
            {
                screen: 6,

                buttons: [



                    { btn1: 0.85, shouldMultiply: true },
                    { btn2: 830, shouldMultiply: false },
                    { btn3: 1.2, shouldMultiply: true },
                    { btn4: 700, shouldMultiply: false }

                ]
            }, {
                screen: 7,

                buttons: [



                    { btn1: 0.85, shouldMultiply: true },
                    { btn2: 830, shouldMultiply: false },
                    { btn3: 1.85, shouldMultiply: true },
                    { btn4: 700, shouldMultiply: false }

                ]
            }, {
                screen: 8,

                buttons: [



                    { btn1: 1.85, shouldMultiply: true },
                    { btn2: 750, shouldMultiply: false },
                    { btn3: 0.85, shouldMultiply: true },
                    { btn4: 830, shouldMultiply: false }

                ]
            }

        ]
    }

];


export default interviews;

