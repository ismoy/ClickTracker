const interviews = [
    {
        interview: "click-tracker-36",
        content: `
        <div class="form-group">
            <label for="">Tpo. de  [min]:</label>
            <div class="grupolabel">
                <input type="button"   name="btn1"  data-value="" value="Ver">
                <input type="button"   name="btn7" data-value="" value="Ver">
                <input type="button"   name="btn13" data-value="" value="Ver">
            </div>
        </div>
        <div class="form-group">
            <label for="">Tpo. de espera [min]:</label>            
            <div class="grupolabel">
                <input type="button"   name="btn2"  data-value="" value="Ver">
                <input type="button"   name="btn8"  data-value="" value="Ver">
                <input type="button"   name="btn14" data-value="" value="Ver">
            </div>
        </div>
        <div class="form-group">    
            <label for="">Tpo. de viaje [min]:</label>
            <div class="grupolabel">
                <input type="button"   name="btn3"  data-value="" value="Ver">
                <input type="button"   name="btn9"  data-value="" value="Ver">
                <input type="button"   name="btn15" data-value="" value="Ver">
            </div>
        </div>
        <div class="form-group">
            <label for="">Costo[pesos]:</label>
            <div class="grupolabel" > 
                <input type="button"   name="btn4"  data-value="" value="Ver">
                <input type="button"   name="btn10" data-value="" value="Ver">
                <input type="button"   name="btn16" data-value="" value="Ver">
            </div>
        </div>
        <div class="form-group">
            <label for="">##Trasbordoss:</label>
            <div class="grupolabel">
                <input type="button"   name="btn5"  data-value="" value="Ver">
                <input type="button"   name="btn11" data-value="" value="Ver">
                <input type="button"   name="btn17" data-value="" value="Ver">
            </div>
        </div>
        <div class="form-group">
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
                screen: 5,
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
                screen: 6,
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
                screen: 7,

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
                screen: 8,
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
        <div class="form-group">
            <label for="">Tpo. caminata[min]:</label>
            <div class="grupolabel">
                <input type="button"   name="btn1"  data-value="" value="Ver">
                <input type="button"   name="btn6" data-value="" value="Ver">
                <input type="button"   name="btn11" data-value="" value="Ver">
            </div>
        </div>
        <div class="form-group">
            <label for="">Tpo. de espera [min]:</label>            
            <div class="grupolabel">
                <input type="button"   name="btn2"  data-value="" value="Ver">
                <input type="button"   name="btn7"  data-value="" value="Ver">
                <input type="button"   name="btn12" data-value="" value="Ver">
            </div>
        </div>
        <div class="form-group">    
            <label for="">Tpo. de viaje [min]:</label>
            <div class="grupolabel">
                <input type="button"   name="btn3"  data-value="" value="Ver">
                <input type="button"   name="btn8"  data-value="" value="Ver">
                <input type="button"   name="btn13" data-value="" value="Ver">
            </div>
        </div>
        <div class="form-group">
            <label for="">Costo[pesos]:</label>
            <div class="grupolabel">  
                <input type="button"   name="btn4"  data-value="" value="Ver">
                <input type="button"   name="btn9" data-value="" value="Ver">
                <input type="button"   name="btn14" data-value="" value="Ver">
            </div>
        </div>
        <div class="form-group">
            <label for="">#Trasbordos:</label>
            <div class="grupolabel">
                <input type="button"   name="btn5"  data-value="" value="Ver">
                <input type="button"   name="btn10" data-value="" value="Ver">
                <input type="button"   name="btn15" data-value="" value="Ver">
            </div>
        </div>
    `, screens: [
            {
                screen: 5,
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
                screen: 6,
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
                screen: 7,
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
                screen: 8,
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
                screen: 9,
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
                    { button: "btn10", value: 0, shouldMultiply: false, row: 5 },
                    { button: "btn11", value: 0.85, shouldMultiply: true, row: 1 },
                    { button: "btn12", value: 1.85, shouldMultiply: true, row: 2 },
                    { button: "btn13", value: 0.5, shouldMultiply: true, row: 3 },
                    { button: "btn14", value: 700, shouldMultiply: false, row: 4 },
                    { button: "btn15", value: 0, shouldMultiply: false, row: 5 },


                ]
            },
            {
                screen: 10,
                buttons: [
                    { button: "btn1", value: 1.2, shouldMultiply: true, row: 1 },
                    { button: "btn2", value: 1.85, shouldMultiply: true, row: 2 },
                    { button: "btn3", value: 0.85, shouldMultiply: true, row: 3 },
                    { button: "btn4", value: 700, shouldMultiply: false, row: 4 },
                    { button: "btn5", value: 1, shouldMultiply: false, row: 5 },
                    { button: "btn6", value: 1.2, shouldMultiply: true, row: 1 },
                    { button: "btn7", value: 0.5, shouldMultiply: true, row: 2 },
                    { button: "btn8", value: 0.5, shouldMultiply: true, row: 3 },
                    { button: "btn9", value: 700, shouldMultiply: false, row: 4 },
                    { button: "btn10", value: 2, shouldMultiply: false, row: 5 },
                    { button: "btn11", value: 0.5, shouldMultiply: true, row: 1 },
                    { button: "btn12", value: 1.2, shouldMultiply: true, row: 2 },
                    { button: "btn13", value: 1.85, shouldMultiply: true, row: 3 },
                    { button: "btn14", value: 700, shouldMultiply: false, row: 4 },
                    { button: "btn15", value: 0, shouldMultiply: false, row: 5 },


                ]
            }, {
                screen:11,
                buttons: [
                    { button: "btn1", value: 0.85, shouldMultiply: true, row: 1 },
                    { button: "btn2", value: 1.2, shouldMultiply: true, row: 2 },
                    { button: "btn3", value: 0.5, shouldMultiply: true, row: 3 },
                    { button: "btn4", value: 750, shouldMultiply: false, row: 4 },
                    { button: "btn5", value: 1, shouldMultiply: false, row: 5 },
                    { button: "btn6", value: 0.85, shouldMultiply: true, row: 1 },
                    { button: "btn7", value: 0.5, shouldMultiply: true, row: 2 },
                    { button: "btn8", value: 1.85, shouldMultiply: true, row: 3 },
                    { button: "btn9", value: 750, shouldMultiply: false, row: 4 },
                    { button: "btn10", value: 0, shouldMultiply: false, row: 5 },
                    { button: "btn11", value: 1.2, shouldMultiply: true, row: 1 },
                    { button: "btn12", value: 1.2, shouldMultiply: true, row: 2 },
                    { button: "btn13", value: 1.2, shouldMultiply: true, row: 3 },
                    { button: "btn14", value: 750, shouldMultiply: false, row: 4 },
                    { button: "btn15", value: 1, shouldMultiply: false, row: 5 }
                ]
            }, {
                screen: 12,
                buttons: [
                    { button: "btn1", value: 0.85, shouldMultiply: true, row: 1 },
                    { button: "btn2", value: 0.85, shouldMultiply: true, row: 2 },
                    { button: "btn3", value: 0.85, shouldMultiply: true, row: 3 },
                    { button: "btn4", value: 700, shouldMultiply: false, row: 4 },
                    { button: "btn5", value: 0, shouldMultiply: false, row: 5 },
                    { button: "btn6", value: 0.85, shouldMultiply: true, row: 1 },
                    { button: "btn7", value: 0.85, shouldMultiply: true, row: 2 },
                    { button: "btn8", value: 1.85, shouldMultiply: true, row: 3 },
                    { button: "btn9", value: 830, shouldMultiply: false, row: 4 },
                    { button: "btn10", value: 1, shouldMultiply: false, row: 5 },
                    { button: "btn11", value: 0.85, shouldMultiply: true, row: 1 },
                    { button: "btn12", value: 0.85, shouldMultiply: true, row: 2 },
                    { button: "btn13", value: 0.85, shouldMultiply: true, row: 3 },
                    { button: "btn14", value: 700, shouldMultiply: false, row: 4 },
                    { button: "btn15", value: 2, shouldMultiply: false, row: 5 },


                ]
            }
        ]
    },
    {
        interview: "click-tracker-34"
        , content: `
        <div class="form-group">
            <label for="">Tpo. caminata[min]:</label>
            <div class="grupolabel">
                <input type="button"   name="btn1"  data-value="" value="Ver">
                <input type="button"   name="btn5" data-value="" value="Ver">
                <input type="button"   name="btn9" data-value="" value="Ver">
            </div>
        </div>
        <div class="form-group">
            <label for="">Tpo. de espéra [min]:</label>            
            <div class="grupolabel">
                <input type="button"   name="btn2"  data-value="" value="Ver">
                <input type="button"   name="btn6"  data-value="" value="Ver">
                <input type="button"   name="btn10" data-value="" value="Ver">
            </div>
        </div>
        <div class="form-group">    
            <label for="">Tpo. de viaje [min]:</label>
            <div class="grupolabel">
                <input type="button"   name="btn3"  data-value="" value="Ver">
                <input type="button"   name="btn7"  data-value="" value="Ver">
                <input type="button"   name="btn11" data-value="" value="Ver">
            </div>
        </div>
        <div class="form-group">
            <label for="">Costo[pesos]:</label>
            <div class="grupolabel">  
                <input type="button"   name="btn4"  data-value="" value="Ver">
                <input type="button"   name="btn8" data-value="" value="Ver">
                <input type="button"   name="btn12" data-value="" value="Ver">
            </div>
        </div>
    `, screens: [
            {
                screen: 5,
                buttons: [

                    { button: "btn1", value: 0.85, shouldMultiply: true, row: 1 },
                    { button: "btn2", value: 1.85, shouldMultiply: true, row: 2 },
                    { button: "btn3", value: 0.5, shouldMultiply: true, row: 3 },
                    { button: "btn4", value: 830, shouldMultiply: false, row: 4 },
                    { button: "btn5", value: 1.2, shouldMultiply: true, row: 1 },
                    { button: "btn6", value: 1.2, shouldMultiply: true, row: 2 },
                    { button: "btn7", value: 1.2, shouldMultiply: true, row: 3 },
                    { button: "btn8", value: 830, shouldMultiply: false, row: 4 },
                    { button: "btn9", value: 0.5, shouldMultiply: true, row: 1 },
                    { button: "btn10", value: 0.5, shouldMultiply: true, row: 2 },
                    { button: "btn11", value: 1.85, shouldMultiply: true, row: 3 },
                    { button: "btn12", value: 730, shouldMultiply: false, row: 4 }
                ]
            },
            {
                screen: 6,
                buttons: [

                    { button: "btn1", value: 0.85, shouldMultiply: true, row: 1 },
                    { button: "btn2", value: 0.5, shouldMultiply: true, row: 2 },
                    { button: "btn3", value: 0.85, shouldMultiply: true, row: 3 },
                    { button: "btn4", value: 730, shouldMultiply: false, row: 4 },
                    { button: "btn5", value: 0.85, shouldMultiply: true, row: 1 },
                    { button: "btn6", value: 1.2, shouldMultiply: true, row: 2 },
                    { button: "btn7", value: 0.85, shouldMultiply: true, row: 3 },
                    { button: "btn8", value: 700, shouldMultiply: false, row: 4 },
                    { button: "btn9", value: 0.85, shouldMultiply: true, row: 1 },
                    { button: "btn10", value: 0.85, shouldMultiply: true, row: 2 },
                    { button: "btn11", value: 1.2, shouldMultiply: true, row: 3 },
                    { button: "btn12", value: 700, shouldMultiply: false, row: 4 }
                ]
            }, {
                screen: 7,
                buttons: [

                    { button: "btn1", value: 0.5, shouldMultiply: true, row: 1 },
                    { button: "btn2", value: 1.85, shouldMultiply: true, row: 2 },
                    { button: "btn3", value: 1.2, shouldMultiply: true, row: 3 },
                    { button: "btn4", value: 700, shouldMultiply: false, row: 4 },
                    { button: "btn5", value: 1.85, shouldMultiply: true, row: 1 },
                    { button: "btn6", value: 0.5, shouldMultiply: true, row: 2 },
                    { button: "btn7", value: 0.5, shouldMultiply: true, row: 3 },
                    { button: "btn8", value: 730, shouldMultiply: false, row: 4 },
                    { button: "btn9", value: 1.85, shouldMultiply: true, row: 1 },
                    { button: "btn10", value: 0.85, shouldMultiply: true, row: 2 },
                    { button: "btn11", value: 0.85, shouldMultiply: true, row: 3 },
                    { button: "btn12", value: 830, shouldMultiply: false, row: 4 }
                ]
            }, {
                screen: 8,

                buttons: [

                    { button: "btn1", value: 1.2, shouldMultiply: true, row: 1 },
                    { button: "btn2", value: 1.2, shouldMultiply: true, row: 2 },
                    { button: "btn3", value: 1.2, shouldMultiply: true, row: 3 },
                    { button: "btn4", value: 700, shouldMultiply: false, row: 4 },
                    { button: "btn5", value: 0.85, shouldMultiply: true, row: 1 },
                    { button: "btn6", value: 1.85, shouldMultiply: true, row: 2 },
                    { button: "btn7", value: 1.2, shouldMultiply: true, row: 3 },
                    { button: "btn8", value: 830, shouldMultiply: false, row: 4 },
                    { button: "btn9", value: 1.85, shouldMultiply: true, row: 1 },
                    { button: "btn10", value: 0.5, shouldMultiply: true, row: 2 },
                    { button: "btn11", value: 0.5, shouldMultiply: true, row: 3 },
                    { button: "btn12", value: 730, shouldMultiply: false, row: 4 }
                ]
            }, {
                screen: 9,
                buttons: [

                    { button: "btn1", value: 1.85, shouldMultiply: true, row: 1 },
                    { button: "btn2", value: 0.5, shouldMultiply: true, row: 2 },
                    { button: "btn3", value: 0.85, shouldMultiply: true, row: 3 },
                    { button: "btn4", value: 730, shouldMultiply: false, row: 4 },
                    { button: "btn5", value: 0.5, shouldMultiply: true, row: 1 },
                    { button: "btn6", value: 1.85, shouldMultiply: true, row: 2 },
                    { button: "btn7", value: 0.85, shouldMultiply: true, row: 3 },
                    { button: "btn8", value: 700, shouldMultiply: false, row: 4 },
                    { button: "btn9", value: 0.85, shouldMultiply: true, row: 1 },
                    { button: "btn10", value: 1.85, shouldMultiply: true, row: 2 },
                    { button: "btn11", value: 1.2, shouldMultiply: true, row: 3 },
                    { button: "btn12", value: 700, shouldMultiply: false, row: 4 }
                ]
            },
            {
                screen: 10,
                buttons: [

                    { button: "btn1", value: 1.85, shouldMultiply: true, row: 1 },
                    { button: "btn2", value: 1.2, shouldMultiply: true, row: 2 },
                    { button: "btn3", value: 0.5, shouldMultiply: true, row: 3 },
                    { button: "btn4", value: 700, shouldMultiply: false, row: 4 },
                    { button: "btn5", value: 0.5, shouldMultiply: true, row: 1 },
                    { button: "btn6", value: 0.85, shouldMultiply: true, row: 2 },
                    { button: "btn7", value: 1.85, shouldMultiply: true, row: 3 },
                    { button: "btn8", value: 730, shouldMultiply: false, row: 4 },
                    { button: "btn9", value: 1.2, shouldMultiply: true, row: 1 },
                    { button: "btn10", value: 1.2, shouldMultiply: true, row: 2 },
                    { button: "btn11", value: 1.85, shouldMultiply: true, row: 3 },
                    { button: "btn12", value: 700, shouldMultiply: false, row: 4 }
                ]
            }, {
                screen: 11,

                buttons: [

                    { button: "btn1", value: 1.2, shouldMultiply: true, row: 1 },
                    { button: "btn2", value: 0.85, shouldMultiply: true, row: 2 },
                    { button: "btn3", value: 1.85, shouldMultiply: true, row: 3 },
                    { button: "btn4", value: 730, shouldMultiply: false, row: 4 },
                    { button: "btn5", value: 1.2, shouldMultiply: true, row: 1 },
                    { button: "btn6", value: 0.5, shouldMultiply: true, row: 2 },
                    { button: "btn7", value: 1.85, shouldMultiply: true, row: 3 },
                    { button: "btn8", value: 730, shouldMultiply: false, row: 4 },
                    { button: "btn9", value: 0.5, shouldMultiply: true, row: 1 },
                    { button: "btn10", value: 1.85, shouldMultiply: true, row: 2 },
                    { button: "btn11", value: 0.5, shouldMultiply: true, row: 3 },
                    { button: "btn12", value: 730, shouldMultiply: false, row: 4 }
                ]
            }, {
                screen: 12,

                buttons: [

                    { button: "btn1", value: 0.5, shouldMultiply: true, row: 1 },
                    { button: "btn2", value: 0.85, shouldMultiply: true, row: 2 },
                    { button: "btn3", value: 1.85, shouldMultiply: true, row: 3 },
                    { button: "btn4", value: 830, shouldMultiply: false, row: 4 },
                    { button: "btn5", value: 1.85, shouldMultiply: true, row: 1 },
                    { button: "btn6", value: 0.85, shouldMultiply: true, row: 2 },
                    { button: "btn7", value: 0.5, shouldMultiply: true, row: 3 },
                    { button: "btn8", value: 700, shouldMultiply: false, row: 4 },
                    { button: "btn9", value: 1.2, shouldMultiply: true, row: 1 },
                    { button: "btn10", value: 1.2, shouldMultiply: true, row: 2 },
                    { button: "btn11", value: 0.85, shouldMultiply: true, row: 3 },
                    { button: "btn12", value: 830, shouldMultiply: false, row: 4 }
                ]
            }

        ]
    },

    {
        interview: "click-tracker-33"
        , content: `
        <div class="form-group" id="tacker33-1">
            <label for="">Tpo. caminata y de espera[min]:</label>
            <div class="grupolabel">
                <input type="button"   name="btn1"  data-value="" value="Ver">
                <input type="button"   name="btn4" data-value="" value="Ver">
                <input type="button"   name="btn7" data-value="" value="Ver">
            </div>
        </div>
        <div class="form-group" id="tacker33-2">
            <label for="">Tpo. de viaje [min]:</label>            
            <div class="grupolabel">
                <input type="button"   name="btn2"  data-value="" value="Ver">
                <input type="button"   name="btn5"  data-value="" value="Ver">
                <input type="button"   name="btn8" data-value="" value="Ver">
            </div>
        </div>
        <div class="form-group" id="tacker33-3">    
            <label for="">Costo[pesos]:</label>
            <div class="grupolabel">
                <input type="button"   name="btn3"  data-value="" value="Ver">
                <input type="button"   name="btn6"  data-value="" value="Ver">
                <input type="button"   name="btn9" data-value="" value="Ver">
            </div>
        </div>
 
    `, screens: [
            {
                screen: 5,

                buttons: [

                    { button: "btn1", value: 0.5, shouldMultiply: true, row: 1 },
                    { button: "btn2", value: 1.2, shouldMultiply: true, row: 2 },
                    { button: "btn3", value: 750, shouldMultiply: false, row: 3 },
                    { button: "btn4", value: 1.85, shouldMultiply: true, row: 1 },
                    { button: "btn5", value: 0.5, shouldMultiply: true, row: 2 },
                    { button: "btn6", value: 750, shouldMultiply: false, row: 3 },
                    { button: "btn7", value: 0.85, shouldMultiply: true, row: 1 },
                    { button: "btn8", value: 1.85, shouldMultiply: true, row: 2 },
                    { button: "btn9", value: 750, shouldMultiply: false, row: 3 }
                ]
            },
            {
                screen: 6,

                buttons: [



                    { button: "btn1", value: 1.2, shouldMultiply: true, row: 1 },
                    { button: "btn2", value: 1.85, shouldMultiply: true, row: 2 },
                    { button: "btn3", value: 700, shouldMultiply: false, row: 3 },
                    { button: "btn4", value: 0.5, shouldMultiply: true, row: 1 },
                    { button: "btn5", value: 1.85, shouldMultiply: true, row: 2 },
                    { button: "btn6", value: 830, shouldMultiply: false, row: 3 },
                    { button: "btn7", value: 1.85, shouldMultiply: true, row: 1 },
                    { button: "btn8", value: 0.5, shouldMultiply: true, row: 2 },
                    { button: "btn9", value: 750, shouldMultiply: false, row: 3 }
                ]
            }, {
                screen: 7,

                buttons: [

                    { button: "btn1", value: 0.85, shouldMultiply: true, row: 1 },
                    { button: "btn2", value: 0.5, shouldMultiply: true, row: 2 },
                    { button: "btn3", value: 700, shouldMultiply: false, row: 3 },
                    { button: "btn4", value: 0.85, shouldMultiply: true, row: 1 },
                    { button: "btn5", value: 0.85, shouldMultiply: true, row: 2 },
                    { button: "btn6", value: 750, shouldMultiply: false, row: 3 },
                    { button: "btn7", value: 1.2, shouldMultiply: true, row: 1 },
                    { button: "btn8", value: 0.85, shouldMultiply: true, row: 2 },
                    { button: "btn9", value: 700, shouldMultiply: false, row: 3 }
                ]
            }, {
                screen: 8,

                buttons: [

                    { button: "btn1", value: 1.2, shouldMultiply: true, row: 1 },
                    { button: "btn2", value: 1.2, shouldMultiply: true, row: 2 },
                    { button: "btn3", value: 750, shouldMultiply: false, row: 3 },
                    { button: "btn4", value: 1.2, shouldMultiply: true, row: 1 },
                    { button: "btn5", value: 0.5, shouldMultiply: true, row: 2 },
                    { button: "btn6", value: 830, shouldMultiply: false, row: 3 },
                    { button: "btn7", value: 0.5, shouldMultiply: true, row: 1 },
                    { button: "btn8", value: 1.85, shouldMultiply: true, row: 2 },
                    { button: "btn9", value: 700, shouldMultiply: false, row: 3 }
                ]
            }, {
                screen: 9,

                buttons: [

                    { button: "btn1", value: 1.85, shouldMultiply: true, row: 1 },
                    { button: "btn2", value: 0.5, shouldMultiply: true, row: 2 },
                    { button: "btn3", value: 830, shouldMultiply: true, row: 3 },
                    { button: "btn4", value: 1.2, shouldMultiply: false, row: 1 },
                    { button: "btn5", value: 1.2, shouldMultiply: false, row: 2 },
                    { button: "btn6", value: 700, shouldMultiply: false, row: 3 },
                    { button: "btn7", value: 0.5, shouldMultiply: true, row: 2 },
                    { button: "btn8", value: 0.85, shouldMultiply: true, row: 3 },
                    { button: "btn9", value: 750, shouldMultiply: true, row: 1 }

                ]
            },
            {
                screen: 10,

                buttons: [
                    { button: "btn1", value: 0.85, shouldMultiply: true, row: 1 },
                    { button: "btn2", value: 0.85, shouldMultiply: true, row: 2 },
                    { button: "btn3", value: 830, shouldMultiply: false, row: 3 },
                    { button: "btn4", value: 1.85, shouldMultiply: true, row: 1 },
                    { button: "btn5", value: 0.85, shouldMultiply: true, row: 2 },
                    { button: "btn6", value: 700, shouldMultiply: false, row: 3 },
                    { button: "btn7", value: 0.85, shouldMultiply: true, row: 1 },
                    { button: "btn8", value: 1.2, shouldMultiply: true, row: 2 },
                    { button: "btn9", value: 830, shouldMultiply: false, row: 3 }
                ]
            }, {
                screen: 11,

                buttons: [
                    { button: "btn1", value: 1.85, shouldMultiply: true, row: 1 },
                    { button: "btn2", value: 0.85, shouldMultiply: true, row: 2 },
                    { button: "btn3", value: 700, shouldMultiply: false, row: 3 },
                    { button: "btn4", value: 0.5, shouldMultiply: true, row: 1 },
                    { button: "btn5", value: 1.2, shouldMultiply: true, row: 2 },
                    { button: "btn6", value: 700, shouldMultiply: false, row: 3 },
                    { button: "btn7", value: 1.2, shouldMultiply: true, row: 1 },
                    { button: "btn8", value: 1.2, shouldMultiply: true, row: 2 },
                    { button: "btn9", value: 830, shouldMultiply: false, row: 3 }
                ]
            }, {
                screen: 12,

                buttons: [
                    { button: "btn1", value: 0.5, shouldMultiply: true, row: 1 },
                    { button: "btn2", value: 1.85, shouldMultiply: true, row: 2 },
                    { button: "btn3", value: 750, shouldMultiply: false, row: 3 },
                    { button: "btn4", value: 0.85, shouldMultiply: true, row: 1 },
                    { button: "btn5", value: 1.85, shouldMultiply: true, row: 2 },
                    { button: "btn6", value: 750, shouldMultiply: false, row: 3 },
                    { button: "btn7", value: 1.85, shouldMultiply: true, row: 1 },
                    { button: "btn8", value: 0.5, shouldMultiply: true, row: 2 },
                    { button: "btn9", value: 700, shouldMultiply: false, row: 3 }
                ]
            }
        ]
    },

    {
        interview: "click-tracker-32"
        , content: `
        <div class="form-group">
            <label for="">Tpo. total de viaje[min]:</label>
            <div class="grupolabel">
                <input type="button"   name="btn1"  data-value="" value="Ver">
                <input type="button"   name="btn3" data-value="" value="Ver">
                <input type="button"   name="btn5" data-value="" value="Ver">
            </div>
        </div>
        <div class="form-group" id="tracker322">
            <label for="">Costo[pesos]:</label>            
            <div class="grupolabel">
                <input type="button"   name="btn2"  data-value="" value="Ver">
                <input type="button"   name="btn4"  data-value="" value="Ver">
                <input type="button"   name="btn6" data-value="" value="Ver">
            </div>
        </div>
    `, screens: [
            {
                screen: 5,

                buttons: [
                    { button: "btn1", value: 1.85, shouldMultiply: true, row: 1 },
                    { button: "btn2", value: 750, shouldMultiply: false, row: 2 },
                    { button: "btn3", value: 1.2, shouldMultiply: true, row: 1 },
                    { button: "btn4", value: 750, shouldMultiply: false, row: 2 },
                    { button: "btn5", value: 1.85, shouldMultiply: true, row: 1 },
                    { button: "btn6", value: 750, shouldMultiply: false, row: 2 }
                ]
            },
            {
                screen: 6,

                buttons: [
                    { button: "btn1", value: 0.5, shouldMultiply: true, row: 1 },
                    { button: "btn2", value: 750, shouldMultiply: false, row: 2 },
                    { button: "btn3", value: 0.85, shouldMultiply: true, row: 1 },
                    { button: "btn4", value: 700, shouldMultiply: false, row: 2 },
                    { button: "btn5", value: 0.85, shouldMultiply: true, row: 1 },
                    { button: "btn6", value: 700, shouldMultiply: false, row: 2 }
                ]
            }, {
                screen: 7,

                buttons: [
                    { button: "btn1", value: 1.85, shouldMultiply: true, row: 1 },
                    { button: "btn2", value: 750, shouldMultiply: false, row: 2 },
                    { button: "btn3", value: 1.85, shouldMultiply: true, row: 1 },
                    { button: "btn4", value: 750, shouldMultiply: false, row: 2 },
                    { button: "btn5", value: 1.2, shouldMultiply: true, row: 1 },
                    { button: "btn6", value: 700, shouldMultiply: false, row: 2 }
                ]
            }, {
                screen: 8,

                buttons: [
                    { button: "btn1", value: 1.2, shouldMultiply: true, row: 1 },
                    { button: "btn2", value: 700, shouldMultiply: false, row: 2 },
                    { button: "btn3", value: 0.5, shouldMultiply: true, row: 1 },
                    { button: "btn4", value: 830, shouldMultiply: false, row: 2 },
                    { button: "btn5", value: 0.85, shouldMultiply: true, row: 1 },
                    { button: "btn6", value: 830, shouldMultiply: false, row: 2 }
                ]
            }, {
                screen: 9,

                buttons: [
                    { button: "btn1", value: 0.85, shouldMultiply: true, row: 1 },
                    { button: "btn2", value: 700, shouldMultiply: false, row: 2 },
                    { button: "btn3", value: 0.85, shouldMultiply: true, row: 1 },
                    { button: "btn4", value: 750, shouldMultiply: false, row: 2 },
                    { button: "btn5", value: 0.5, shouldMultiply: true, row: 1 },
                    { button: "btn6", value: 700, shouldMultiply: false, row: 2 }

                ]
            },
            {
                screen: 10,

                buttons: [
                    { button: "btn1", value: 0.85, shouldMultiply: true, row: 1 },
                    { button: "btn2", value: 830, shouldMultiply: false, row: 2 },
                    { button: "btn3", value: 1.2, shouldMultiply: true, row: 1 },
                    { button: "btn4", value: 700, shouldMultiply: false, row: 2 },
                    { button: "btn5", value: 1.2, shouldMultiply: true, row: 1 },
                    { button: "btn6", value: 750, shouldMultiply: false, row: 2 }
                ]
            }, {
                screen: 11,

                buttons: [
                    { button: "btn1", value: 0.5, shouldMultiply: true, row: 1 },
                    { button: "btn2", value: 700, shouldMultiply: false, row: 2 },
                    { button: "btn3", value: 0.5, shouldMultiply: true, row: 1 },
                    { button: "btn4", value: 830, shouldMultiply: false, row: 2 },
                    { button: "btn5", value: 0.5, shouldMultiply: true, row: 1 },
                    { button: "btn6", value: 830, shouldMultiply: false, row: 2 }
                ]
            }, {
                screen: 12,

                buttons: [
                    { button: "btn1", value: 1.2, shouldMultiply: true, row: 1 },
                    { button: "btn2", value: 830, shouldMultiply: false, row: 2 },
                    { button: "btn3", value: 1.85, shouldMultiply: true, row: 1 },
                    { button: "btn4", value: 700, shouldMultiply: false, row: 2 },
                    { button: "btn5", value: 1.85, shouldMultiply: true, row: 1 },
                    { button: "btn6", value: 750, shouldMultiply: false, row: 2 }
                ]
            }
        ]
    },

    {
        interview: "click-tracker-26"
        , content: `
        <div class="form-group" id="trac261">
            <label for="">Tpo. caminata[min]:</label>
            <div class="grupolabel">
                <input type="button"   name="btn1"  data-value="" value="Ver">
                <input type="button"   name="btn7" data-value="" value="Ver">
            </div>
        </div>
        <div class="form-group" id="trac262">
            <label for="">Tpo. de espera [min]:</label>            
            <div class="grupolabel">
                <input type="button"   name="btn2"  data-value="" value="Ver">
                <input type="button"   name="btn8"  data-value="" value="Ver">
            </div>
        </div>
        <div class="form-group" id="trac263">    
            <label for="">Tpo. de viaje [min]:</label>
            <div class="grupolabel">
                <input type="button"   name="btn3"  data-value="" value="Ver">
                <input type="button"   name="btn9"  data-value="" value="Ver">
            </div>
        </div>
        <div class="form-group" id="trac264">
            <label for="">Costo[pesos]:</label>
            <div class="grupolabel" > 
                <input type="button"   name="btn4"  data-value="" value="Ver">
                <input type="button"   name="btn10" data-value="" value="Ver">
            </div>
        </div>
        <div class="form-group" id="trac265">
            <label for="">#Trasbordos [-]:</label>
            <div class="grupolabel">
                <input type="button"   name="btn5"  data-value="" value="Ver">
                <input type="button"   name="btn11" data-value="" value="Ver">
            </div>
        </div>
        <div class="form-group" id="trac266">
            <label for="">¿Hay asiento?</label>
            <div class="grupolabel">
                <input type="button"   name="btn6"  data-value="" value="Ver">
                <input type="button"   name="btn12" data-value="" value="Ver">
            </div>
        </div>
    
    `, screens: [
            {
                screen: 5,

                buttons: [
                    { button: "btn1", value: 0.5, shouldMultiply: true, row: 1 },
                    { button: "btn2", value: 1.2, shouldMultiply: true, row: 2 },
                    { button: "btn3", value: 0.5, shouldMultiply: true, row: 3 },
                    { button: "btn4", value: 700, shouldMultiply: false, row: 4 },
                    { button: "btn5", value: 0, shouldMultiply: false, row: 5 },
                    { button: "btn6", value: 1, shouldMultiply: false, row: 6 },
                    { button: "btn7", value: 1.85, shouldMultiply: true, row: 1 },
                    { button: "btn8", value: 1.85, shouldMultiply: true, row: 2 },
                    { button: "btn9", value: 1.85, shouldMultiply: true, row: 3 },
                    { button: "btn10", value: 830, shouldMultiply: false, row: 4 },
                    { button: "btn11", value: 2, shouldMultiply: false, row: 5 },
                    { button: "btn12", value: 0, shouldMultiply: false, row: 6 }
                ]
            },
            {
                screen: 6,

                buttons: [
                    { button: "btn1", value: 1.85, shouldMultiply: true, row: 1 },
                    { button: "btn2", value: 1.85, shouldMultiply: true, row: 2 },
                    { button: "btn3", value: 1.85, shouldMultiply: true, row: 3 },
                    { button: "btn4", value: 830, shouldMultiply: false, row: 4 },
                    { button: "btn5", value: 2, shouldMultiply: false, row: 5 },
                    { button: "btn6", value: 0, shouldMultiply: false, row: 6 },
                    { button: "btn7", value: 0.5, shouldMultiply: true, row: 1 },
                    { button: "btn8", value: 0.5, shouldMultiply: true, row: 2 },
                    { button: "btn9", value: 0.5, shouldMultiply: true, row: 3 },
                    { button: "btn10", value: 830, shouldMultiply: false, row: 4 },
                    { button: "btn11", value: 0, shouldMultiply: false, row: 5 },
                    { button: "btn12", value: 0, shouldMultiply: false, row: 6 }
                ]
            }, {
                screen: 7,

                buttons: [
                    { button: "btn1", value: 0.5, shouldMultiply: true, row: 1 },
                    { button: "btn2", value: 0.5, shouldMultiply: true, row: 2 },
                    { button: "btn3", value: 1.2, shouldMultiply: true, row: 3 },
                    { button: "btn4", value: 700, shouldMultiply: false, row: 4 },
                    { button: "btn5", value: 0, shouldMultiply: false, row: 5 },
                    { button: "btn6", value: 1, shouldMultiply: false, row: 6 },
                    { button: "btn7", value: 0.85, shouldMultiply: true, row: 1 },
                    { button: "btn8", value: 0.85, shouldMultiply: true, row: 2 },
                    { button: "btn9", value: 0.85, shouldMultiply: true, row: 3 },
                    { button: "btn10", value: 700, shouldMultiply: false, row: 4 },
                    { button: "btn11", value: 0, shouldMultiply: false, row: 5 },
                    { button: "btn12", value: 0, shouldMultiply: false, row: 6 }
                ]
            }, {
                screen: 8,

                buttons: [
                    { button: "btn1", value: 1.2, shouldMultiply: true, row: 1 },
                    { button: "btn2", value: 1.2, shouldMultiply: true, row: 2 },
                    { button: "btn3", value: 1.2, shouldMultiply: true, row: 3 },
                    { button: "btn4", value: 770, shouldMultiply: false, row: 4 },
                    { button: "btn5", value: 1, shouldMultiply: false, row: 5 },
                    { button: "btn6", value: 1, shouldMultiply: false, row: 6 },
                    { button: "btn7", value: 0.85, shouldMultiply: true, row: 1 },
                    { button: "btn8", value: 0.85, shouldMultiply: true, row: 2 },
                    { button: "btn9", value: 0.85, shouldMultiply: true, row: 3 },
                    { button: "btn10", value: 700, shouldMultiply: false, row: 4 },
                    { button: "btn11", value: 0, shouldMultiply: false, row: 5 },
                    { button: "btn12", value: 0, shouldMultiply: false, row: 6 }
                ]
            }, {
                screen: 9,

                buttons: [
                    { button: "btn1", value: 0.85, shouldMultiply: true, row: 1 },
                    { button: "btn2", value: 0.85, shouldMultiply: true, row: 2 },
                    { button: "btn3", value: 0.85, shouldMultiply: true, row: 3 },
                    { button: "btn4", value: 770, shouldMultiply: false, row: 4 },
                    { button: "btn5", value: 1, shouldMultiply: false, row: 5 },
                    { button: "btn6", value: 0, shouldMultiply: false, row: 6 },
                    { button: "btn7", value: 1.2, shouldMultiply: true, row: 1 },
                    { button: "btn8", value: 1.2, shouldMultiply: true, row: 2 },
                    { button: "btn9", value: 1.2, shouldMultiply: true, row: 3 },
                    { button: "btn10", value: 770, shouldMultiply: false, row: 4 },
                    { button: "btn11", value: 1, shouldMultiply: false, row: 5 },
                    { button: "btn12", value: 1, shouldMultiply: false, row: 6 },
                ]
            },
            {
                screen: 10,

                buttons: [
                    { button: "btn1", value: 1.2, shouldMultiply: true, row: 1 },
                    { button: "btn2", value: 0.5, shouldMultiply: true, row: 2 },
                    { button: "btn3", value: 0.5, shouldMultiply: true, row: 3 },
                    { button: "btn4", value: 700, shouldMultiply: false, row: 4 },
                    { button: "btn5", value: 0, shouldMultiply: false, row: 5 },
                    { button: "btn6", value: 1, shouldMultiply: false, row: 6 },
                    { button: "btn7", value: 1.2, shouldMultiply: true, row: 1 },
                    { button: "btn8", value: 1.2, shouldMultiply: true, row: 2 },
                    { button: "btn9", value: 1.2, shouldMultiply: true, row: 3 },
                    { button: "btn10", value: 770, shouldMultiply: false, row: 4 },
                    { button: "btn11", value: 1, shouldMultiply: false, row: 5 },
                    { button: "btn12", value: 1, shouldMultiply: false, row: 6 }

                ]
            }, {
                screen: 11,

                buttons: [
                    { button: "btn1", value: 0.85, shouldMultiply: true, row: 1 },
                    { button: "btn2", value: 0.85, shouldMultiply: true, row: 2 },
                    { button: "btn3", value: 0.85, shouldMultiply: true, row: 3 },
                    { button: "btn4", value: 770, shouldMultiply: false, row: 4 },
                    { button: "btn5", value: 1, shouldMultiply: false, row: 5 },
                    { button: "btn6", value: 0, shouldMultiply: false, row: 6 },
                    { button: "btn7", value: 1.85, shouldMultiply: true, row: 1 },
                    { button: "btn8", value: 1.85, shouldMultiply: true, row: 2 },
                    { button: "btn9", value: 1.85, shouldMultiply: true, row: 3 },
                    { button: "btn10", value: 770, shouldMultiply: false, row: 4 },
                    { button: "btn11", value: 1, shouldMultiply: false, row: 5 },
                    { button: "btn12", value: 1, shouldMultiply: false, row: 6 }
                ]
            }, {
                screen: 12,

                buttons: [
                    { button: "btn1", value: 1.85, shouldMultiply: true, row: 1 },
                    { button: "btn2", value: 1.85, shouldMultiply: true, row: 2 },
                    { button: "btn3", value: 1.85, shouldMultiply: true, row: 3 },
                    { button: "btn4", value: 830, shouldMultiply: false, row: 4 },
                    { button: "btn5", value: 2, shouldMultiply: false, row: 5 },
                    { button: "btn6", value: 0, shouldMultiply: false, row: 6 },
                    { button: "btn7", value: 0.5, shouldMultiply: true, row: 1 },
                    { button: "btn8", value: 0.5, shouldMultiply: true, row: 2 },
                    { button: "btn9", value: 0.5, shouldMultiply: true, row: 3 },
                    { button: "btn10", value: 700, shouldMultiply: false, row: 4 },
                    { button: "btn11", value: 2, shouldMultiply: false, row: 5 },
                    { button: "btn12", value: 1, shouldMultiply: false, row: 6 }
                ]
            }
        ]
    },

    {
        interview: "click-tracker-25"
        , content: `
        <div class="form-group" id="traker251">
            <label for="">Tpo. caminata[min]:</label>
            <div class="grupolabel">
                <input type="button"   name="btn1"  data-value="" value="Ver">
                <input type="button"   name="btn6" data-value="" value="Ver">
            </div>
        </div>
        <div class="form-group" id="traker252">
            <label for="">Tpo. de espera [min]:</label>            
            <div class="grupolabel">
                <input type="button"   name="btn2"  data-value="" value="Ver">
                <input type="button"   name="btn7"  data-value="" value="Ver">
            </div>
        </div>
        <div class="form-group" id="traker253">    
            <label for="">Tpo. de viaje [min]:</label>
            <div class="grupolabel">
                <input type="button"   name="btn3"  data-value="" value="Ver">
                <input type="button"   name="btn8"  data-value="" value="Ver">
            </div>
        </div>
        <div class="form-group" id="traker254">
            <label for="">Costo[pesos]:</label>
            <div class="grupolabel">  
                <input type="button"   name="btn4"  data-value="" value="Ver">
                <input type="button"   name="btn9" data-value="" value="Ver">
            </div>
        </div>
        <div class="form-group" id="traker255">
            <label for="">#Trasbordos [-]:</label>
            <div class="grupolabel">
                <input type="button"   name="btn5"  data-value="" value="Ver">
                <input type="button"   name="btn10" data-value="" value="Ver">
            </div>
        </div>
    `, screens: [
            {
                screen: 5,

                buttons: [
                    { button: "btn1", value: 0.5, shouldMultiply: true, row: 1 },
                    { button: "btn2", value: 1.2, shouldMultiply: true, row: 1 },
                    { button: "btn3", value: 1.85, shouldMultiply: true, row: 1 },
                    { button: "btn4", value: 700, shouldMultiply: false, row: 1 },
                    { button: "btn5", value: 2, shouldMultiply: false, row: 1 },
                    { button: "btn6", value: 1.85, shouldMultiply: true, row: 1 },
                    { button: "btn7", value: 0.85, shouldMultiply: true, row: 1 },
                    { button: "btn8", value: 0.5, shouldMultiply: true, row: 1 },
                    { button: "btn9", value: 830, shouldMultiply: false, row: 1 },
                    { button: "btn10", value: 0, shouldMultiply: false, row: 1 }
                ]
            },
            {
                screen: 6,

                buttons: [
                    { button: "btn1", value: 1.85, shouldMultiply: true, row: 1 },
                    { button: "btn2", value: 1.85, shouldMultiply: true, row: 1 },
                    { button: "btn3", value: 0.5, shouldMultiply: true, row: 1 },
                    { button: "btn4", value: 700, shouldMultiply: false, row: 1 },
                    { button: "btn5", value: 0, shouldMultiply: false, row: 1 },
                    { button: "btn6", value: 0.85, shouldMultiply: true, row: 1 },
                    { button: "btn7", value: 0.5, shouldMultiply: true, row: 1 },
                    { button: "btn8", value: 1.85, shouldMultiply: true, row: 1 },
                    { button: "btn9", value: 830, shouldMultiply: false, row: 1 },
                    { button: "btn10", value: 1, shouldMultiply: false, row: 1 }

                ]
            }, {
                screen: 7,

                buttons: [

                    { button: "btn1", value: 1.85, shouldMultiply: true, row: 1 },
                    { button: "btn2", value: 0.5, shouldMultiply: true, row: 1 },
                    { button: "btn3", value: 1.2, shouldMultiply: true, row: 1 },
                    { button: "btn4", value: 700, shouldMultiply: false, row: 1 },
                    { button: "btn5", value: 0, shouldMultiply: false, row: 1 },
                    { button: "btn6", value: 0.5, shouldMultiply: true, row: 1 },
                    { button: "btn7", value: 1.85, shouldMultiply: true, row: 1 },
                    { button: "btn8", value: 0.5, shouldMultiply: true, row: 1 },
                    { button: "btn9", value: 750, shouldMultiply: false, row: 1 },
                    { button: "btn10", value: 2, shouldMultiply: false, row: 1 }
                ]
            }, {
                screen: 8,

                buttons: [
                    { button: "btn1", value: 0.85, shouldMultiply: true, row: 1 },
                    { button: "btn2", value: 1.2, shouldMultiply: true, row: 1 },
                    { button: "btn3", value: 0.5, shouldMultiply: true, row: 1 },
                    { button: "btn4", value: 750, shouldMultiply: false, row: 1 },
                    { button: "btn5", value: 1, shouldMultiply: false, row: 1 },
                    { button: "btn6", value: 1.2, shouldMultiply: true, row: 1 },
                    { button: "btn7", value: 0.85, shouldMultiply: true, row: 1 },
                    { button: "btn8", value: 1.2, shouldMultiply: true, row: 1 },
                    { button: "btn9", value: 750, shouldMultiply: false, row: 1 },
                    { button: "btn10", value: 1, shouldMultiply: false, row: 1 }
                ]
            }, {
                screen: 9,

                buttons: [
                    { button: "btn1", value: 0.5, shouldMultiply: true, row: 1 },
                    { button: "btn2", value: 0.85, shouldMultiply: true, row: 1 },
                    { button: "btn3", value: 1.2, shouldMultiply: true, row: 1 },
                    { button: "btn4", value: 750, shouldMultiply: false, row: 1 },
                    { button: "btn5", value: 1, shouldMultiply: false, row: 1 },
                    { button: "btn6", value: 1.2, shouldMultiply: true, row: 1 },
                    { button: "btn7", value: 1.2, shouldMultiply: true, row: 1 },
                    { button: "btn8", value: 0.85, shouldMultiply: true, row: 1 },
                    { button: "btn9", value: 700, shouldMultiply: false, row: 1 },
                    { button: "btn10", value: 1, shouldMultiply: false, row: 1 }

                ]
            },
            {
                screen: 10,

                buttons: [
                    { button: "btn1", value: 1.2, shouldMultiply: true, row: 1 },
                    { button: "btn2", value: 0.5, shouldMultiply: true, row: 1 },
                    { button: "btn3", value: 0.85, shouldMultiply: true, row: 1 },
                    { button: "btn4", value: 750, shouldMultiply: false, row: 1 },
                    { button: "btn5", value: 1, shouldMultiply: false, row: 1 },
                    { button: "btn6", value: 0.85, shouldMultiply: true, row: 1 },
                    { button: "btn7", value: 1.85, shouldMultiply: true, row: 1 },
                    { button: "btn8", value: 1.2, shouldMultiply: true, row: 1 },
                    { button: "btn9", value: 750, shouldMultiply: false, row: 1 },
                    { button: "btn10", value: 0, shouldMultiply: false, row: 1 }
                ]
            }, {
                screen: 11,

                buttons: [
                    { button: "btn1", value: 1.2, shouldMultiply: true, row: 1 },
                    { button: "btn2", value: 0.85, shouldMultiply: true, row: 1 },
                    { button: "btn3", value: 0.85, shouldMultiply: true, row: 1 },
                    { button: "btn4", value: 830, shouldMultiply: false, row: 1 },
                    { button: "btn5", value: 2, shouldMultiply: false, row: 1 },
                    { button: "btn6", value: 0.5, shouldMultiply: true, row: 1 },
                    { button: "btn7", value: 1.2, shouldMultiply: true, row: 1 },
                    { button: "btn8", value: 1.85, shouldMultiply: true, row: 1 },
                    { button: "btn9", value: 700, shouldMultiply: false, row: 1 },
                    { button: "btn10", value: 0, shouldMultiply: false, row: 1 }
                ]
            }, {
                screen: 12,

                buttons: [
                    { button: "btn1", value: 0.85, shouldMultiply: true, row: 1 },
                    { button: "btn2", value: 1.85, shouldMultiply: true, row: 1 },
                    { button: "btn3", value: 1.85, shouldMultiply: true, row: 1 },
                    { button: "btn4", value: 830, shouldMultiply: false, row: 1 },
                    { button: "btn5", value: 0, shouldMultiply: false, row: 1 },
                    { button: "btn6", value: 1.85, shouldMultiply: true, row: 1 },
                    { button: "btn7", value: 0.5, shouldMultiply: true, row: 1 },
                    { button: "btn8", value: 0.85, shouldMultiply: true, row: 1 },
                    { button: "btn9", value: 700, shouldMultiply: false, row: 1 },
                    { button: "btn10", value: 2, shouldMultiply: false, row: 1 }
                ]
            }

        ]
    },

    {
        interview: "click-tracker-24"
        , content: `
        <div class="form-group">
            <label for="">Tpo. caminata[min]:</label>
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
            <label for="">Tpo. de viaje [min]:</label>
            <div class="grupolabel">
                <input type="button"   name="btn3"  data-value="" value="Ver">
                <input type="button"   name="btn9"  data-value="" value="Ver">
            </div>
        </div>
        <div class="form-group">
            <label for="">Costo[pesos]:</label>
            <div class="grupolabel" > 
                <input type="button"   name="btn4"  data-value="" value="Ver">
                <input type="button"   name="btn10" data-value="" value="Ver">
            </div>
        </div>
    `, screens: [
            {
                screen: 5,

                buttons: [
                    { button: "btn1", value: 1.85, shouldMultiply: true, row: 1 },
                    { button: "btn2", value: 1.2, shouldMultiply: true, row: 2 },
                    { button: "btn3", value: 1.85, shouldMultiply: true, row: 3 },
                    { button: "btn4", value: 830, shouldMultiply: false, row: 4 },
                    { button: "btn5", value: 0.85, shouldMultiply: true, row: 1 },
                    { button: "btn6", value: 0.5, shouldMultiply: true, row: 2 },
                    { button: "btn7", value: 0.85, shouldMultiply: true, row: 3 },
                    { button: "btn8", value: 700, shouldMultiply: false, row: 4 }

                ]
            },
            {
                screen: 6,

                buttons: [
                    { button: "btn1", value: 1.2, shouldMultiply: true, row: 1 },
                    { button: "btn2", value: 0.5, shouldMultiply: true, row: 2 },
                    { button: "btn3", value: 0.5, shouldMultiply: true, row: 3 },
                    { button: "btn4", value: 700, shouldMultiply: false, row: 4 },
                    { button: "btn5", value: 1.2, shouldMultiply: true, row: 1 },
                    { button: "btn6", value: 1.2, shouldMultiply: true, row: 2 },
                    { button: "btn7", value: 1.2, shouldMultiply: true, row: 3 },
                    { button: "btn8", value: 730, shouldMultiply: false, row: 4 }

                ]
            }, {
                screen: 7,

                buttons: [
                    { button: "btn1", value: 1.85, shouldMultiply: true, row: 1 },
                    { button: "btn2", value: 0.85, shouldMultiply: true, row: 2 },
                    { button: "btn3", value: 1.2, shouldMultiply: true, row: 3 },
                    { button: "btn4", value: 730, shouldMultiply: false, row: 4 },
                    { button: "btn5", value: 1.2, shouldMultiply: true, row: 1 },
                    { button: "btn6", value: 0.85, shouldMultiply: true, row: 2 },
                    { button: "btn7", value: 1.2, shouldMultiply: true, row: 3 },
                    { button: "btn8", value: 730, shouldMultiply: false, row: 4 }

                ]
            }, {
                screen: 8,

                buttons: [
                    { button: "btn1", value: 0.5, shouldMultiply: true, row: 1 },
                    { button: "btn2", value: 0.85, shouldMultiply: true, row: 2 },
                    { button: "btn3", value: 0.5, shouldMultiply: true, row: 3 },
                    { button: "btn4", value: 830, shouldMultiply: false, row: 4 },
                    { button: "btn5", value: 1.85, shouldMultiply: true, row: 1 },
                    { button: "btn6", value: 1.85, shouldMultiply: true, row: 2 },
                    { button: "btn7", value: 1.85, shouldMultiply: true, row: 3 },
                    { button: "btn8", value: 830, shouldMultiply: false, row: 4 }

                ]
            }, {
                screen: 9,

                buttons: [
                    { button: "btn1", value: 0.85, shouldMultiply: true, row: 1 },
                    { button: "btn2", value: 1.85, shouldMultiply: true, row: 2 },
                    { button: "btn3", value: 0.85, shouldMultiply: true, row: 3 },
                    { button: "btn4", value: 730, shouldMultiply: false, row: 4 },
                    { button: "btn5", value: 0.85, shouldMultiply: true, row: 1 },
                    { button: "btn6", value: 0.85, shouldMultiply: true, row: 2 },
                    { button: "btn7", value: 0.85, shouldMultiply: true, row: 3 },
                    { button: "btn8", value: 700, shouldMultiply: false, row: 4 }

                ]
            },
            {
                screen: 10,

                buttons: [
                    { button: "btn1", value: 0.5, shouldMultiply: true, row: 1 },
                    { button: "btn2", value: 0.5, shouldMultiply: true, row: 2 },
                    { button: "btn3", value: 1.85, shouldMultiply: true, row: 3 },
                    { button: "btn4", value: 700, shouldMultiply: false, row: 4 },
                    { button: "btn5", value: 0.5, shouldMultiply: true, row: 1 },
                    { button: "btn6", value: 1.2, shouldMultiply: true, row: 2 },
                    { button: "btn7", value: 0.5, shouldMultiply: true, row: 3 },
                    { button: "btn8", value: 700, shouldMultiply: false, row: 4 }
                ]
            }, {
                screen: 11,

                buttons: [

                    { button: "btn1", value: 0.85, shouldMultiply: true, row: 1 },
                    { button: "btn2", value: 1.85, shouldMultiply: true, row: 2 },
                    { button: "btn3", value: 0.85, shouldMultiply: true, row: 3 },
                    { button: "btn4", value: 700, shouldMultiply: false, row: 4 },
                    { button: "btn5", value: 1.85, shouldMultiply: true, row: 1 },
                    { button: "btn6", value: 1.85, shouldMultiply: true, row: 2 },
                    { button: "btn7", value: 1.85, shouldMultiply: true, row: 3 },
                    { button: "btn8", value: 730, shouldMultiply: false, row: 4 }
                ]
            }, {
                screen: 12,

                buttons: [

                    { button: "btn1", value: 1.2, shouldMultiply: true, row: 1 },
                    { button: "btn2", value: 1.2, shouldMultiply: true, row: 2 },
                    { button: "btn3", value: 1.2, shouldMultiply: true, row: 3 },
                    { button: "btn4", value: 730, shouldMultiply: false, row: 4 },
                    { button: "btn5", value: 0.5, shouldMultiply: true, row: 1 },
                    { button: "btn6", value: 0.5, shouldMultiply: true, row: 2 },
                    { button: "btn7", value: 0.5, shouldMultiply: true, row: 3 },
                    { button: "btn8", value: 830, shouldMultiply: false, row: 4 }
                ]
            }
        ]
    },

    {
        interview: "click-tracker-23"
        , content: `
        <div class="form-group" id="tracker231">
            <label for="">Tpo. caminata y de espera[min]:</label>
            <div class="grupolabel">
                <input type="button"   name="btn1"  data-value="" value="Ver">
                <input type="button"   name="btn4" data-value="" value="Ver">
            </div>
        </div>
        <div class="form-group" id="tracker232">
            <label for="">Tpo. de viaje[min]:</label>            
            <div class="grupolabel">
                <input type="button"   name="btn2"  data-value="" value="Ver">
                <input type="button"   name="btn5"  data-value="" value="Ver">
            </div>
        </div>
        <div class="form-group" id="tracker233">    
            <label for="">Costo[pesos]:</label>
            <div class="grupolabel">
                <input type="button"   name="btn3"  data-value="" value="Ver">
                <input type="button"   name="btn6"  data-value="" value="Ver">
            </div>
        </div>
    `, screens: [
            {
                screen: 5,

                buttons: [
                    { button: "btn1", value: 0.85, shouldMultiply: true, row: 1 },
                    { button: "btn2", value: 1.85, shouldMultiply: true, row: 2 },
                    { button: "btn3", value: 750, shouldMultiply: false, row: 3 },
                    { button: "btn4", value: 0.5, shouldMultiply: true, row: 1 },
                    { button: "btn5", value: 0.5, shouldMultiply: true, row: 2 },
                    { button: "btn6", value: 830, shouldMultiply: false, row: 3 }

                ]
            },
            {
                screen: 6,

                buttons: [
                    { button: "btn1", value: 1.85, shouldMultiply: true, row: 1 },
                    { button: "btn2", value: 1.85, shouldMultiply: true, row: 2 },
                    { button: "btn3", value: 830, shouldMultiply: false, row: 3 },
                    { button: "btn4", value: 0.5, shouldMultiply: true, row: 1 },
                    { button: "btn5", value: 0.85, shouldMultiply: true, row: 2 },
                    { button: "btn6", value: 700, shouldMultiply: false, row: 3 }

                ]
            }, {
                screen: 7,

                buttons: [
                    { button: "btn1", value: 0.85, shouldMultiply: true, row: 1 },
                    { button: "btn2", value: 1.2, shouldMultiply: true, row: 2 },
                    { button: "btn3", value: 750, shouldMultiply: false, row: 3 },
                    { button: "btn4", value: 0.85, shouldMultiply: true, row: 1 },
                    { button: "btn5", value: 0.5, shouldMultiply: true, row: 2 },
                    { button: "btn6", value: 700, shouldMultiply: false, row: 3 }

                ]
            }, {
                screen: 8,

                buttons: [
                    { button: "btn1", value: 1.2, shouldMultiply: true, row: 1 },
                    { button: "btn2", value: 0.85, shouldMultiply: true, row: 2 },
                    { button: "btn3", value: 700, shouldMultiply: false, row: 3 },
                    { button: "btn4", value: 1.2, shouldMultiply: true, row: 1 },
                    { button: "btn5", value: 1.2, shouldMultiply: true, row: 2 },
                    { button: "btn6", value: 750, shouldMultiply: false, row: 3 }

                ]
            }, {
                screen: 9,

                buttons: [
                    { button: "btn1", value: 1.85, shouldMultiply: true, row: 1 },
                    { button: "btn2", value: 0.85, shouldMultiply: true, row: 2 },
                    { button: "btn3", value: 750, shouldMultiply: false, row: 3 },
                    { button: "btn4", value: 0.85, shouldMultiply: true, row: 1 },
                    { button: "btn5", value: 0.85, shouldMultiply: true, row: 2 },
                    { button: "btn6", value: 700, shouldMultiply: false, row: 3 }

                ]
            },
            {
                screen: 10,

                buttons: [
                    { button: "btn1", value: 0.5, shouldMultiply: true, row: 1 },
                    { button: "btn2", value: 1.2, shouldMultiply: true, row: 2 },
                    { button: "btn3", value: 700, shouldMultiply: false, row: 3 },
                    { button: "btn4", value: 1.85, shouldMultiply: true, row: 1 },
                    { button: "btn5", value: 1.85, shouldMultiply: true, row: 2 },
                    { button: "btn6", value: 750, shouldMultiply: false, row: 3 }

                ]
            }, {
                screen: 11,

                buttons: [
                    { button: "btn1", value: 0.5, shouldMultiply: true, row: 1 },
                    { button: "btn2", value: 0.5, shouldMultiply: true, row: 2 },
                    { button: "btn3", value: 830, shouldMultiply: false, row: 3 },
                    { button: "btn4", value: 1.2, shouldMultiply: true, row: 1 },
                    { button: "btn5", value: 1.2, shouldMultiply: true, row: 2 },
                    { button: "btn6", value: 750, shouldMultiply: false, row: 3 }

                ]
            }, {
                screen: 12,

                buttons: [
                    { button: "btn1", value: 1.2, shouldMultiply: true, row: 1 },
                    { button: "btn2", value: 0.5, shouldMultiply: true, row: 2 },
                    { button: "btn3", value: 700, shouldMultiply: false, row: 3 },
                    { button: "btn4", value: 1.85, shouldMultiply: true, row: 1 },
                    { button: "btn5", value: 1.85, shouldMultiply: true, row: 2 },
                    { button: "btn6", value: 830, shouldMultiply: false, row: 3 }

                ]
            }

        ]
    },

    {
        interview: "click-tracker-22"
        , content: `
        <div class="form-group">
            <label for="">Tpo. total de viaje[min]:</label>
            <div class="grupolabel">
                <input type="button"   name="btn1"  data-value="" value="Ver">
                <input type="button"   name="btn3" data-value="" value="Ver">
            </div>
        </div>
        <div class="form-group">
            <label for="">Costo[pesos]:</label>            
            <div class="grupolabel">
                <input type="button"   name="btn2"  data-value="" value="Ver">
                <input type="button"   name="btn4"  data-value="" value="Ver">
            </div>
        </div>
    `, screens: [
            {
                screen: 5,

                buttons: [
                    { button: "btn1", value: 0.5, shouldMultiply: true, row: 1 },
                    { button: "btn2", value: 830, shouldMultiply: false, row: 2 },
                    { button: "btn3", value: 1.2, shouldMultiply: true, row: 1 },
                    { button: "btn4", value: 750, shouldMultiply: false, row: 2 }

                ]
            },
            {
                screen: 6,

                buttons: [
                    { button: "btn1", value: 0.5, shouldMultiply: true, row: 1 },
                    { button: "btn2", value: 830, shouldMultiply: false, row: 2 },
                    { button: "btn3", value: 1.85, shouldMultiply: true, row: 1 },
                    { button: "btn4", value: 750, shouldMultiply: false, row: 2 }

                ]
            }, {
                screen: 7,

                buttons: [
                    { button: "btn1", value: 1.85, shouldMultiply: true, row: 1 },
                    { button: "btn2", value: 750, shouldMultiply: false, row: 2 },
                    { button: "btn3", value: 0.5, shouldMultiply: true, row: 1 },
                    { button: "btn4", value: 830, shouldMultiply: false, row: 2 }

                ]
            }, {
                screen: 8,

                buttons: [
                    { button: "btn1", value: 1.2, shouldMultiply: true, row: 1 },
                    { button: "btn2", value: 750, shouldMultiply: false, row: 2 },
                    { button: "btn3", value: 0.5, shouldMultiply: true, row: 1 },
                    { button: "btn4", value: 830, shouldMultiply: false, row: 2 }

                ]
            }, {
                screen: 9,

                buttons: [
                    { button: "btn1", value: 1.2, shouldMultiply: true, row: 1 },
                    { button: "btn2", value: 700, shouldMultiply: false, row: 2 },
                    { button: "btn3", value: 0.85, shouldMultiply: true, row: 1 },
                    { button: "btn4", value: 750, shouldMultiply: false, row: 2 }

                ]
            },
            {
                screen: 10,

                buttons: [
                    { button: "btn1", value: 0.85, shouldMultiply: true, row: 1 },
                    { button: "btn2", value: 830, shouldMultiply: false, row: 2 },
                    { button: "btn3", value: 1.2, shouldMultiply: true, row: 1 },
                    { button: "btn4", value: 700, shouldMultiply: false, row: 2 }

                ]
            }, {
                screen: 11,

                buttons: [
                    { button: "btn1", value: 0.85, shouldMultiply: true, row: 1 },
                    { button: "btn2", value: 830, shouldMultiply: false, row: 2 },
                    { button: "btn3", value: 1.85, shouldMultiply: true, row: 1 },
                    { button: "btn4", value: 700, shouldMultiply: false, row: 2 }

                ]
            }, {
                screen: 12,

                buttons: [
                    { button: "btn1", value: 1.85, shouldMultiply: true, row: 1 },
                    { button: "btn2", value: 750, shouldMultiply: false, row: 2 },
                    { button: "btn3", value: 0.85, shouldMultiply: true, row: 1 },
                    { button: "btn4", value: 830, shouldMultiply: false, row: 2 }

                ]
            }
        ]
    }

];


export default interviews;