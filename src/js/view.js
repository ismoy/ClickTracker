const interviews = [
    {
        interview: "click-tracker-36",
        content: `
        <div class="form-group">
            <label for="">Tiempo de caminata [min]:</label>
            <div class="grupolabel">
                <input type="button"   name="btn1"  data-value="" value="Ver">
                <input type="button"   name="btn7" data-value="" value="Ver">
                <input type="button"   name="btn13" data-value="" value="Ver">
            </div>
        </div>
        <div class="form-group">
            <label for="">Tiempo de espera [min]:</label>            
            <div class="grupolabel">
                <input type="button"   name="btn2"  data-value="" value="Ver">
                <input type="button"   name="btn8"  data-value="" value="Ver">
                <input type="button"   name="btn14" data-value="" value="Ver">
            </div>
        </div>
        <div class="form-group">    
            <label for="">Tiempo de viaje [min]:</label>
            <div class="grupolabel">
                <input type="button"   name="btn3"  data-value="" value="Ver">
                <input type="button"   name="btn9"  data-value="" value="Ver">
                <input type="button"   name="btn15" data-value="" value="Ver">
            </div>
        </div>
        <div class="form-group">
            <label for="">Tarifa [$]:</label>
            <div class="grupolabel" > 
                <input type="button"   name="btn4"  data-value="" value="Ver">
                <input type="button"   name="btn10" data-value="" value="Ver">
                <input type="button"   name="btn16" data-value="" value="Ver">
            </div>
        </div>
        <div class="form-group">
            <label for="">Trasbordo [-]:</label>
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
                screen: 1,
                btn: [
                    { btn1: 1.2, shouldMultiply: true, row: 1 },
                    { btn2: 0.5, shouldMultiply: true, row: 2 },
                    { btn3: 0.5, shouldMultiply: true, row: 3 },
                    { btn4: 750, shouldMultiply: false, row: 4 },
                    { btn5: 2, shouldMultiply: false, row: 5 },
                    { btn6: 0, shouldMultiply: false, row: 6 },
                    { btn7: 1.2, shouldMultiply: true, row: 1 },
                    { btn8: 0.85, shouldMultiply: true, row: 2 },
                    { btn9: 1.85, shouldMultiply: true, row: 3 },
                    { btn10: 830, shouldMultiply: false, row: 4 },
                    { btn11: 0, shouldMultiply: false, row: 5 },
                    { btn12: 0, shouldMultiply: false, row: 6 },
                    { btn13: 0.5, shouldMultiply: true, row: 1 },
                    { btn14: 1.85, shouldMultiply: true, row: 2 },
                    { btn15: 1.85, shouldMultiply: true, row: 3 },
                    { btn16: 700, shouldMultiply: false, row: 4 },
                    { btn17: 0, shouldMultiply: false, row: 5 },
                    { btn18: 1, shouldMultiply: false, row: 6 },

                ]
            },
            {
                screen: 2,
                btn: [
                    { btn1: 1.2, shouldMultiply: true, row: 1 },
                    { btn2: 1.2, shouldMultiply: true, row: 2 },
                    { btn3: 0.85, shouldMultiply: true, row: 3 },
                    { btn4: 830, shouldMultiply: false, row: 4 },
                    { btn5: 0, shouldMultiply: false, row: 5 },
                    { btn6: 0, shouldMultiply: false, row: 6 },
                    { btn7: 0.85, shouldMultiply: true, row: 1 },
                    { btn8: 0.5, shouldMultiply: true, row: 2 },
                    { btn9: 0.85, shouldMultiply: true, row: 3 },
                    { btn10: 700, shouldMultiply: false, row: 4 },
                    { btn11: 2, shouldMultiply: false, row: 5 },
                    { btn12: 0, shouldMultiply: false, row: 6 },
                    { btn13: 1.2, shouldMultiply: true, row: 1 },
                    { btn14: 1.2, shouldMultiply: true, row: 2 },
                    { btn15: 0.85, shouldMultiply: true, row: 3 },
                    { btn16: 830, shouldMultiply: false, row: 4 },
                    { btn17: 1, shouldMultiply: false, row: 5 },
                    { btn18: 0, shouldMultiply: false, row: 6 },

                ]
            }, {
                screen: 3,
                btn: [
                    { btn1: 0.5, shouldMultiply: true, row: 1 },
                    { btn2: 0.85, shouldMultiply: true, row: 2 },
                    { btn3: 1.85, shouldMultiply: true, row: 3 },
                    { btn4: 750, shouldMultiply: false, row: 4 },
                    { btn5: 2, shouldMultiply: false, row: 5 },
                    { btn6: 1, shouldMultiply: false, row: 6 },
                    { btn7: 1.85, shouldMultiply: true, row: 1 },
                    { btn8: 1.2, shouldMultiply: true, row: 2 },
                    { btn9: 0.5, shouldMultiply: true, row: 3 },
                    { btn10: 700, shouldMultiply: false, row: 4 },
                    { btn11: 0, shouldMultiply: false, row: 5 },
                    { btn12: 1, shouldMultiply: false, row: 6 },
                    { btn13: 1.2, shouldMultiply: true, row: 1 },
                    { btn14: 1.2, shouldMultiply: true, row: 2 },
                    { btn15: 1.2, shouldMultiply: true, row: 3 },
                    { btn16: 750, shouldMultiply: false, row: 4 },
                    { btn17: 1, shouldMultiply: false, row: 5 },
                    { btn18: 0, shouldMultiply: false, row: 6 },

                ]
            }, {
                screen: 4,
                btn: [
                    { btn1: 0.85, shouldMultiply: true, row: 1 },
                    { btn2: 1.85, shouldMultiply: true, row: 2 },
                    { btn3: 0.85, shouldMultiply: true, row: 3 },
                    { btn4: 750, shouldMultiply: false, row: 4 },
                    { btn5: 1, shouldMultiply: false, row: 5 },
                    { btn6: 0, shouldMultiply: false, row: 6 },
                    { btn7: 0.85, shouldMultiply: true, row: 1 },
                    { btn8: 0.5, shouldMultiply: true, row: 2 },
                    { btn9: 1.85, shouldMultiply: true, row: 3 },
                    { btn10: 750, shouldMultiply: false, row: 4 },
                    { btn11: 0, shouldMultiply: false, row: 5 },
                    { btn12: 1, shouldMultiply: false, row: 6 },
                    { btn13: 0.5, shouldMultiply: true, row: 1 },
                    { btn14: 1.85, shouldMultiply: true, row: 2 },
                    { btn15: 0.5, shouldMultiply: true, row: 3 },
                    { btn16: 700, shouldMultiply: false, row: 4 },
                    { btn17: 2, shouldMultiply: false, row: 5 },
                    { btn18: 1, shouldMultiply: false, row: 6 },
                ]
            }, {
                screen: 5,
                btn: [
                    { btn1: 0.85, shouldMultiply: true, row: 1 },
                    { btn2: 1.85, shouldMultiply: true, row: 2 },
                    { btn3: 0.5, shouldMultiply: true, row: 3 },
                    { btn4: 700, shouldMultiply: false, row: 4 },
                    { btn5: 0, shouldMultiply: false, row: 5 },
                    { btn6: 0, shouldMultiply: false, row: 6 },
                    { btn7: 1.2, shouldMultiply: true, row: 1 },
                    { btn8: 1.2, shouldMultiply: true, row: 2 },
                    { btn9: 1.2, shouldMultiply: true, row: 3 },
                    { btn10: 750, shouldMultiply: false, row: 4 },
                    { btn11: 1, shouldMultiply: false, row: 5 },
                    { btn12: 0, shouldMultiply: false, row: 6 },
                    { btn13: 1.85, shouldMultiply: true, row: 1 },
                    { btn14: 0.5, shouldMultiply: true, row: 2 },
                    { btn15: 0.85, shouldMultiply: true, row: 3 },
                    { btn16: 750, shouldMultiply: false, row: 4 },
                    { btn17: 2, shouldMultiply: false, row: 5 },
                    { btn18: 1, shouldMultiply: false, row: 6 },

                ]
            },
            {
                screen: 6,
                btn: [
                    { btn1: 1.85, shouldMultiply: true, row: 1 },
                    { btn2: 1.2, shouldMultiply: true, row: 2 },
                    { btn3: 1.2, shouldMultiply: true, row: 3 },
                    { btn4: 700, shouldMultiply: false, row: 4 },
                    { btn5: 1, shouldMultiply: false, row: 5 },
                    { btn6: 1, shouldMultiply: false, row: 6 },
                    { btn7: 1.85, shouldMultiply: true, row: 1 },
                    { btn8: 0.85, shouldMultiply: true, row: 2 },
                    { btn9: 0.85, shouldMultiply: true, row: 3 },
                    { btn10: 750, shouldMultiply: false, row: 4 },
                    { btn11: 2, shouldMultiply: false, row: 5 },
                    { btn12: 1, shouldMultiply: false, row: 6 },
                    { btn13: 0.85, shouldMultiply: true, row: 1 },
                    { btn14: 0.85, shouldMultiply: true, row: 2 },
                    { btn15: 1.2, shouldMultiply: true, row: 3 },
                    { btn16: 750, shouldMultiply: false, row: 4 },
                    { btn17: 0, shouldMultiply: false, row: 5 },
                    { btn18: 0, shouldMultiply: false, row: 6 },

                ]
            }, {
                screen: 7,
                btn: [
                    { btn1: 1.2, shouldMultiply: true, row: 1 },
                    { btn2: 0.5, shouldMultiply: true, row: 2 },
                    { btn3: 0.5, shouldMultiply: true, row: 3 },
                    { btn4: 750, shouldMultiply: false, row: 4 },
                    { btn5: 2, shouldMultiply: false, row: 5 },
                    { btn6: 0, shouldMultiply: false, row: 6 },
                    { btn7: 1.2, shouldMultiply: true, row: 1 },
                    { btn8: 0.85, shouldMultiply: true, row: 2 },
                    { btn9: 1.85, shouldMultiply: true, row: 3 },
                    { btn10: 830, shouldMultiply: false, row: 4 },
                    { btn11: 0, shouldMultiply: false, row: 5 },
                    { btn12: 0, shouldMultiply: false, row: 6 },
                    { btn13: 0.5, shouldMultiply: true, row: 1 },
                    { btn14: 1.85, shouldMultiply: true, row: 2 },
                    { btn15: 1.85, shouldMultiply: true, row: 3 },
                    { btn16: 700, shouldMultiply: false, row: 4 },
                    { btn17: 0, shouldMultiply: false, row: 5 },
                    { btn18: 1, shouldMultiply: false, row: 6 },

                ]
            }, {
                screen: 8,
                btn: [
                    { btn1: 0.5, shouldMultiply: true, row: 1 },
                    { btn2: 0.85, shouldMultiply: true, row: 1 },
                    { btn3: 1.85, shouldMultiply: true, row: 1 },
                    { btn4: 830, shouldMultiply: false, row: 1 },
                    { btn5: 1, shouldMultiply: false, row: 1 },
                    { btn6: 1, shouldMultiply: false, row: 1 },
                    { btn7: 0.5, shouldMultiply: true, row: 1 },
                    { btn8: 1.85, shouldMultiply: true, row: 1 },
                    { btn9: 1.2, shouldMultiply: true, row: 1 },
                    { btn10: 700, shouldMultiply: false, row: 1 },
                    { btn11: 1, shouldMultiply: false, row: 1 },
                    { btn12: 0, shouldMultiply: false, row: 1 },
                    { btn13: 1.85, shouldMultiply: true, row: 1 },
                    { btn14: 0.5, shouldMultiply: true, row: 1 },
                    { btn15: 0.5, shouldMultiply: true, row: 1 },
                    { btn16: 830, shouldMultiply: false, row: 1 },
                    { btn17: 0, shouldMultiply: false, row: 1 },
                    { btn18: 1, shouldMultiply: false, row: 1 },
                ]
            }

        ]
    },

    {
        interview: "Click tracker 35"
        , content: `
        <div class="form-group">
            <label for="">Tiempo de caminata [min]:</label>
            <div class="grupolabel">
                <input type="button"   name="btn1"  data-value="" value="Ver">
                <input type="button"   name="btn17" data-value="" value="Ver">
                <input type="button"   name="btn13" data-value="" value="Ver">
            </div>
        </div>
        <div class="form-group">
            <label for="">Tiempo de espera [min]:</label>            
            <div class="grupolabel">
                <input type="button"   name="btn2"  data-value="" value="Ver">
                <input type="button"   name="btn8"  data-value="" value="Ver">
                <input type="button"   name="btn14" data-value="" value="Ver">
            </div>
        </div>
        <div class="form-group">    
            <label for="">Tiempo de viaje [min]:</label>
            <div class="grupolabel">
                <input type="button"   name="btn3"  data-value="" value="Ver">
                <input type="button"   name="btn9"  data-value="" value="Ver">
                <input type="button"   name="btn15" data-value="" value="Ver">
            </div>
        </div>
        <div class="form-group">
            <label for="">Tarifa [$]:</label>
            <div class="grupolabel">  
                <input type="button"   name="btn4"  data-value="" value="Ver">
                <input type="button"   name="btn10" data-value="" value="Ver">
                <input type="button"   name="btn16" data-value="" value="Ver">
            </div>
        </div>
        <div class="form-group">
            <label for="">Trasbordo [-]:</label>
            <div class="grupolabel">
                <input type="button"   name="btn5"  data-value="" value="Ver">
                <input type="button"   name="btn11" data-value="" value="Ver">
                <input type="button"   name="btn17" data-value="" value="Ver">
            </div>
        </div>
    `, screens: [
            {
                screen: 1,
                btn: [
                    { btn1: 0.5, shouldMultiply: true },
                    { btn2: 1.85, shouldMultiply: true },
                    { btn3: 1.2, shouldMultiply: true },
                    { btn4: 830, shouldMultiply: false },
                    { btn5: 2, shouldMultiply: false },
                    { btn6: 1.85, shouldMultiply: true },
                    { btn7: 1.2, shouldMultiply: true },
                    { btn8: 1.2, shouldMultiply: true },
                    { btn9: 700, shouldMultiply: false },
                    { btn10: 1, shouldMultiply: false },
                    { btn11: 1.85, shouldMultiply: true },
                    { btn12: 0.85, shouldMultiply: true },
                    { btn13: 0.5, shouldMultiply: true },
                    { btn14: 830, shouldMultiply: false },
                    { btn15: 0, shouldMultiply: false }

                ]
            },
            {
                screen: 2,
                btn: [
                    { btn1: 1.2, shouldMultiply: true },
                    { btn2: 1.2, shouldMultiply: true },
                    { btn3: 0.5, shouldMultiply: true },
                    { btn4: 750, shouldMultiply: false },
                    { btn5: 0, shouldMultiply: false },
                    { btn6: 1.85, shouldMultiply: true },
                    { btn7: 0.85, shouldMultiply: true },
                    { btn8: 0.85, shouldMultiply: true },
                    { btn9: 700, shouldMultiply: false },
                    { btn10: 1, shouldMultiply: false },
                    { btn11: 0.5, shouldMultiply: true },
                    { btn12: 0.5, shouldMultiply: true },
                    { btn13: 1.85, shouldMultiply: true },
                    { btn14: 750, shouldMultiply: false },
                    { btn15: 1, shouldMultiply: false }


                ]
            }, {
                screen: 3,
                btn: [
                    { btn1: 1.85, shouldMultiply: true },
                    { btn2: 0.5, shouldMultiply: true },
                    { btn3: 1.85, shouldMultiply: true },
                    { btn4: 830, shouldMultiply: false },
                    { btn5: 0, shouldMultiply: false },
                    { btn6: 0.5, shouldMultiply: true },
                    { btn7: 1.85, shouldMultiply: true },
                    { btn8: 0.5, shouldMultiply: true },
                    { btn9: 830, shouldMultiply: false },
                    { btn10: 2, shouldMultiply: false },
                    { btn11: 1.2, shouldMultiply: true },
                    { btn12: 1.85, shouldMultiply: true },
                    { btn13: 1.2, shouldMultiply: true },
                    { btn14: 830, shouldMultiply: false },
                    { btn15: 1, shouldMultiply: false },
                ]
            }, {
                screen: 4,
                btn: [
                    { btn1: 1.85, shouldMultiply: true },
                    { btn2: 0.85, shouldMultiply: true },
                    { btn3: 1.2, shouldMultiply: true },
                    { btn4: 750, shouldMultiply: false },
                    { btn5: 1, shouldMultiply: false },
                    { btn6: 0.5, shouldMultiply: true },
                    { btn7: 1.85, shouldMultiply: true },
                    { btn8: 1.2, shouldMultiply: true },
                    { btn9: 750, shouldMultiply: false },
                    { btn10: 0, shouldMultiply: false },
                    { btn11: 1.85, shouldMultiply: false },
                    { btn12: 0.5, shouldMultiply: true },
                    { btn13: 0.85, shouldMultiply: true },
                    { btn14: 750, shouldMultiply: false },
                    { btn15: 2, shouldMultiply: false },


                ]
            }, {
                screen: 5,
                btn: [
                    { btn1: 0.5, shouldMultiply: true },
                    { btn2: 0.5, shouldMultiply: true },
                    { btn3: 1.85, shouldMultiply: true },
                    { btn4: 700, shouldMultiply: false },
                    { btn5: 2, shouldMultiply: false },
                    { btn6: 1.2, shouldMultiply: true },
                    { btn7: 1.2, shouldMultiply: true },
                    { btn8: 0.85, shouldMultiply: true },
                    { btn9: 750, shouldMultiply: false },
                    { btn10: 0, shouldMultiply: false },
                    { btn11: 0.85, shouldMultiply: true },
                    { btn12: 1.85, shouldMultiply: true },
                    { btn13: 0.5, shouldMultiply: true },
                    { btn14: 700, shouldMultiply: false },
                    { btn15: 0, shouldMultiply: false },

                ]
            },
            {
                screen: 6,
                btn: [
                    { btn1: 1.2, shouldMultiply: true },
                    { btn2: 1.85, shouldMultiply: true },
                    { btn3: 0.85, shouldMultiply: true },
                    { btn4: 700, shouldMultiply: false },
                    { btn5: 1, shouldMultiply: false },
                    { btn6: 1.2, shouldMultiply: true },
                    { btn7: 0.5, shouldMultiply: true },
                    { btn8: 0.5, shouldMultiply: true },
                    { btn9: 700, shouldMultiply: false },
                    { btn10: 2, shouldMultiply: false },
                    { btn11: 0.5, shouldMultiply: true },
                    { btn12: 1.2, shouldMultiply: true },
                    { btn13: 1.85, shouldMultiply: true },
                    { btn14: 700, shouldMultiply: false },
                    { btn15: 0, shouldMultiply: false },

                ]
            }, {
                screen: 7,
                btn: [
                    { btn1: 0.85, shouldMultiply: true },
                    { btn2: 1.2, shouldMultiply: true },
                    { btn3: 0.5, shouldMultiply: true },
                    { btn4: 750, shouldMultiply: false },
                    { btn5: 1, shouldMultiply: false },
                    { btn6: 0.85, shouldMultiply: true },
                    { btn7: 0.5, shouldMultiply: true },
                    { btn8: 1.85, shouldMultiply: true },
                    { btn9: 750, shouldMultiply: false },
                    { btn10: 0, shouldMultiply: false },
                    { btn11: 1.2, shouldMultiply: true },
                    { btn12: 1.2, shouldMultiply: true },
                    { btn13: 1.2, shouldMultiply: true },
                    { btn14: 750, shouldMultiply: false },
                    { btn15: 1, shouldMultiply: false }
                ]
            }, {
                screen: 8,
                btn: [
                    { btn1: 0.85, shouldMultiply: true },
                    { btn2: 0.85, shouldMultiply: true },
                    { btn3: 0.85, shouldMultiply: true },
                    { btn4: 700, shouldMultiply: false },
                    { btn5: 0, shouldMultiply: false },
                    { btn6: 0.85, shouldMultiply: true },
                    { btn7: 0.85, shouldMultiply: true },
                    { btn8: 1.85, shouldMultiply: true },
                    { btn9: 830, shouldMultiply: false },
                    { btn10: 1, shouldMultiply: false },
                    { btn11: 0.85, shouldMultiply: true },
                    { btn12: 0.85, shouldMultiply: true },
                    { btn13: 0.85, shouldMultiply: true },
                    { btn14: 700, shouldMultiply: false },
                    { btn15: 2, shouldMultiply: false },


                ]
            }
        ]
    },

    {
        interview: "click-tracker-34"
        , content: `
        <div class="form-group">
            <label for="">Tiempo de caminata [min]:</label>
            <div class="grupolabel">
                <input type="button"   name="btn1"  data-value="" value="Ver">
                <input type="button"   name="btn17" data-value="" value="Ver">
                <input type="button"   name="btn13" data-value="" value="Ver">
            </div>
        </div>
        <div class="form-group">
            <label for="">Tiempo de espera [min]:</label>            
            <div class="grupolabel">
                <input type="button"   name="btn2"  data-value="" value="Ver">
                <input type="button"   name="btn8"  data-value="" value="Ver">
                <input type="button"   name="btn14" data-value="" value="Ver">
            </div>
        </div>
        <div class="form-group">    
            <label for="">Tiempo de viaje [min]:</label>
            <div class="grupolabel">
                <input type="button"   name="btn3"  data-value="" value="Ver">
                <input type="button"   name="btn9"  data-value="" value="Ver">
                <input type="button"   name="btn15" data-value="" value="Ver">
            </div>
        </div>
        <div class="form-group">
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
                btn: [
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
                btn: [
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
                btn: [
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
                btn: [
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
                btn: [
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
                btn: [
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
                btn: [
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
                btn: [
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
        <div class="form-group">
            <label for="">Tiempo de caminata [min]:</label>
            <div class="grupolabel">
                <input type="button"   name="btn1"  data-value="" value="Ver">
                <input type="button"   name="btn17" data-value="" value="Ver">
                <input type="button"   name="btn13" data-value="" value="Ver">
            </div>
        </div>
        <div class="form-group">
            <label for="">Tiempo de espera [min]:</label>            
            <div class="grupolabel">
                <input type="button"   name="btn2"  data-value="" value="Ver">
                <input type="button"   name="btn8"  data-value="" value="Ver">
                <input type="button"   name="btn14" data-value="" value="Ver">
            </div>
        </div>
        <div class="form-group">    
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
                btn: [
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
                btn: [
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
                btn: [
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
                btn: [
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
                btn: [
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
                btn: [
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
                btn: [
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
                btn: [
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
        <div class="form-group">
            <label for="">Tiempo de caminata [min]:</label>
            <div class="grupolabel">
                <input type="button"   name="btn1"  data-value="" value="Ver">
                <input type="button"   name="btn17" data-value="" value="Ver">
                <input type="button"   name="btn13" data-value="" value="Ver">
            </div>
        </div>
        <div class="form-group">
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
                btn: [
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
                btn: [
                    { btn1: 0.5, shouldMultiply: true },
                    { btn2: 750, shouldMultiply: false },
                    { btn3: 0.85, shouldMultiply: true },
                    { btn4: 700, shouldMultiply: false },
                    { btn5: 0.85, shouldMultiply: true },
                    { btn6: 700, shouldMultiply: false }
                ]
            }, {
                screen: 3,
                btn: [
                    { btn1: 1.85, shouldMultiply: true },
                    { btn2: 750, shouldMultiply: false },
                    { btn3: 1.85, shouldMultiply: true },
                    { btn4: 750, shouldMultiply: false },
                    { btn5: 1.2, shouldMultiply: true },
                    { btn6: 700, shouldMultiply: false }
                ]
            }, {
                screen: 4,
                btn: [
                    { btn1: 1.2, shouldMultiply: true },
                    { btn2: 700, shouldMultiply: false },
                    { btn3: 0.5, shouldMultiply: true },
                    { btn4: 830, shouldMultiply: false },
                    { btn5: 0.85, shouldMultiply: true },
                    { btn6: 830, shouldMultiply: false }
                ]
            }, {
                screen: 5,
                btn: [
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
                btn: [
                    { btn1: 0.85, shouldMultiply: true },
                    { btn2: 830, shouldMultiply: false },
                    { btn3: 1.2, shouldMultiply: true },
                    { btn4: 700, shouldMultiply: false },
                    { btn5: 1.2, shouldMultiply: true },
                    { btn6: 750, shouldMultiply: false }
                ]
            }, {
                screen: 7,
                btn: [
                    { btn1: 0.5, shouldMultiply: true },
                    { btn2: 700, shouldMultiply: false },
                    { btn3: 0.5, shouldMultiply: true },
                    { btn4: 830, shouldMultiply: false },
                    { btn5: 0.5, shouldMultiply: true },
                    { btn6: 830, shouldMultiply: false }
                ]
            }, {
                screen: 8,
                btn: [
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
        <div class="form-group">
            <label for="">Tarifa [$]:</label>
            <div class="grupolabel" > 
                <input type="button"   name="btn4"  data-value="" value="Ver">
                <input type="button"   name="btn10" data-value="" value="Ver">
            </div>
        </div>
        <div class="form-group">
            <label for="">Trasbordo [-]:</label>
            <div class="grupolabel">
                <input type="button"   name="btn5"  data-value="" value="Ver">
                <input type="button"   name="btn11" data-value="" value="Ver">
            </div>
        </div>
        <div class="form-group">
            <label for="">¿Hay asiento?</label>
            <div class="grupolabel">
                <input type="button"   name="btn6"  data-value="" value="Ver">
                <input type="button"   name="btn12" data-value="" value="Ver">
            </div>
        </div>
    
    `, screens: [
            {
                screen: 1,
                btn: [
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
                btn: [
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
                btn: [
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
                btn: [
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
                btn: [
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
                btn: [
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
                btn: [
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
                btn: [
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
        <div class="form-group">
            <label for="">Tarifa [$]:</label>
            <div class="grupolabel">  
                <input type="button"   name="btn4"  data-value="" value="Ver">
                <input type="button"   name="btn10" data-value="" value="Ver">
            </div>
        </div>
        <div class="form-group">
            <label for="">Trasbordo [-]:</label>
            <div class="grupolabel">
                <input type="button"   name="btn5"  data-value="" value="Ver">
                <input type="button"   name="btn11" data-value="" value="Ver">
            </div>
        </div>
    `, screens: [
            {
                screen: 1,
                btn: [
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
                btn: [
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
                btn: [
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
                btn: [
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
                btn: [
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
                btn: [
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
                btn: [
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
                btn: [
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
        <div class="form-group">
            <label for="">Tarifa [$]:</label>
            <div class="grupolabel" > 
                <input type="button"   name="btn4"  data-value="" value="Ver">
                <input type="button"   name="btn10" data-value="" value="Ver">
            </div>
        </div>
    `, screens: [
            {
                screen: 1,
                btn: [
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
                btn: [
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
                btn: [
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
                btn: [
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
                btn: [
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
                btn: [
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
                btn: [
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
                btn: [
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
                btn: [
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
                btn: [
                    { btn1: 1.85, shouldMultiply: true },
                    { btn2: 1.85, shouldMultiply: true },
                    { btn3: 830, shouldMultiply: false },
                    { btn4: 0.5, shouldMultiply: true },
                    { btn5: 0.85, shouldMultiply: true },
                    { btn6: 700, shouldMultiply: false }

                ]
            }, {
                screen: 3,
                btn: [
                    { btn1: 0.85, shouldMultiply: true },
                    { btn2: 1.2, shouldMultiply: true },
                    { btn3: 750, shouldMultiply: false },
                    { btn4: 0.85, shouldMultiply: true },
                    { btn5: 0.5, shouldMultiply: true },
                    { btn6: 700, shouldMultiply: false }

                ]
            }, {
                screen: 4,
                btn: [
                    { btn1: 1.2, shouldMultiply: true },
                    { btn2: 0.85, shouldMultiply: true },
                    { btn3: 700, shouldMultiply: false },
                    { btn4: 1.2, shouldMultiply: true },
                    { btn5: 1.2, shouldMultiply: true },
                    { btn6: 750, shouldMultiply: false }

                ]
            }, {
                screen: 5,
                btn: [
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
                btn: [
                    { btn1: 0.5, shouldMultiply: true },
                    { btn2: 1.2, shouldMultiply: true },
                    { btn3: 700, shouldMultiply: false },
                    { btn4: 1.85, shouldMultiply: true },
                    { btn5: 1.85, shouldMultiply: true },
                    { btn6: 750, shouldMultiply: false }

                ]
            }, {
                screen: 7,
                btn: [
                    { btn1: 0.5, shouldMultiply: true },
                    { btn2: 0.5, shouldMultiply: true },
                    { btn3: 830, shouldMultiply: false },
                    { btn4: 1.2, shouldMultiply: true },
                    { btn5: 1.2, shouldMultiply: true },
                    { btn6: 750, shouldMultiply: false }

                ]
            }, {
                screen: 8,
                btn: [
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
    `, screens: [
            {
                screen: 1,
                btn: [
                    { btn1: 0.5, shouldMultiply: true },
                    { btn2: 830, shouldMultiply: false },
                    { btn3: 1.2, shouldMultiply: true },
                    { btn4: 750, shouldMultiply: false }

                ]
            },
            {
                screen: 2,
                btn: [
                    { btn1: 0.5, shouldMultiply: true },
                    { btn2: 830, shouldMultiply: false },
                    { btn3: 1.85, shouldMultiply: true },
                    { btn4: 750, shouldMultiply: false }

                ]
            }, {
                screen: 3,
                btn: [
                    { btn1: 1.85, shouldMultiply: true },
                    { btn2: 750, shouldMultiply: false },
                    { btn3: 0.5, shouldMultiply: true },
                    { btn4: 830, shouldMultiply: false }

                ]
            }, {
                screen: 4,
                btn: [
                    { btn1: 1.2, shouldMultiply: true },
                    { btn2: 750, shouldMultiply: false },
                    { btn3: 0.5, shouldMultiply: true },
                    { btn4: 830, shouldMultiply: false }

                ]
            }, {
                screen: 5,
                btn: [
                    { btn1: 1.2, shouldMultiply: true },
                    { btn2: 700, shouldMultiply: false },
                    { btn3: 0.85, shouldMultiply: true },
                    { btn4: 750, shouldMultiply: false }

                ]
            },
            {
                screen: 6,
                btn: [
                    { btn1: 0.85, shouldMultiply: true },
                    { btn2: 830, shouldMultiply: false },
                    { btn3: 1.2, shouldMultiply: true },
                    { btn4: 700, shouldMultiply: false }

                ]
            }, {
                screen: 7,
                btn: [
                    { btn1: 0.85, shouldMultiply: true },
                    { btn2: 830, shouldMultiply: false },
                    { btn3: 1.85, shouldMultiply: true },
                    { btn4: 700, shouldMultiply: false }

                ]
            }, {
                screen: 8,
                btn: [
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

