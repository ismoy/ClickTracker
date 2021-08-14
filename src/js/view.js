const interviews = [
    {
        interview: "Click tracker 36",
        content: `
        <div class="grupolabel1">
        <label for="">Tiempo de caminata [min]:</label>
        <input  name="btn1"  data-value="" value="Ver">
        <input  name="btn17" data-value="" value="Ver">
        <input  name="btn13" data-value="" value="Ver">
    </div>
    
    <div class="grupolabel2">
        <label for="">Tiempo de espera [min]:</label>
        <input  name="btn2"  data-value="" value="Ver">
        <input  name="btn8"  data-value="" value="Ver">
        <input  name="btn14" data-value="" value="Ver">
    </div>

    <div class="grupolabel3">
        <label for="">Tiempo de viaje [min]:</label>
        <input  name="btn3"  data-value="" value="Ver">
        <input  name="btn9"  data-value="" value="Ver">
        <input  name="btn15" data-value="" value="Ver">
    </div>
    <div class="grupolabel4"  
        <label for="">Tarifa [$]:</label>
        <input  name="btn4"  data-value="" value="Ver">
        <input  name="btn10" data-value="" value="Ver">
        <input  name="btn16" data-value="" value="Ver">
    </div>
    <div class="grupolabel5">
        <label for="">Trasbordo [-]:</label>
        <input  name="btn5"  data-value="" value="Ver">
        <input  name="btn11" data-value="" value="Ver">
        <input  name="btn17" data-value="" value="Ver">
    </div>
    <div class="grupolabel6">
        <label for="">¿Hay asiento?</label>
        <input  name="btn6"  data-value="" value="Ver">
        <input  name="btn12" data-value="" value="Ver">
        <input  name="btn18" data-value="" value="Ver">
    </div>
    `,
        screens: [
            {
                screen: 1,
                btn: [
                    { btn1: 1.2, shouldMultiply: true },
                    { btn2: 0.5, shouldMultiply: true },
                    { btn3: 0.5, shouldMultiply: true },
                    { btn4: 750, shouldMultiply: false },
                    { btn5: 2, shouldMultiply: false },
                    { btn6: 0, shouldMultiply: false },
                    { btn7: 1.2, shouldMultiply: true },
                    { btn8: 0.85, shouldMultiply: true },
                    { btn9: 1.85, shouldMultiply: true },
                    { btn10: 830, shouldMultiply: false },
                    { btn11: 0, shouldMultiply: false },
                    { btn12: 0, shouldMultiply: false },
                    { btn13: 0.5, shouldMultiply: true },
                    { btn14: 1.85, shouldMultiply: true },
                    { btn15: 1.85, shouldMultiply: true },
                    { btn16: 700, shouldMultiply: false },
                    { btn17: 0, shouldMultiply: false },
                    { btn18: 1, shouldMultiply: false },

                ]
            },
            {
                screen: 2,
                btn: [
                    { btn1: 1.2, shouldMultiply: true },
                    { btn2: 1.2, shouldMultiply: true },
                    { btn3: 0.85, shouldMultiply: true },
                    { btn4: 830, shouldMultiply: false },
                    { btn5: 0, shouldMultiply: false },
                    { btn6: 0, shouldMultiply: false },
                    { btn7: 0.85, shouldMultiply: true },
                    { btn8: 0.5, shouldMultiply: true },
                    { btn9: 0.85, shouldMultiply: true },
                    { btn10: 700, shouldMultiply: false },
                    { btn11: 2, shouldMultiply: false },
                    { btn12: 0, shouldMultiply: false },
                    { btn13: 1.2, shouldMultiply: true },
                    { btn14: 1.2, shouldMultiply: true },
                    { btn15: 0.85, shouldMultiply: true },
                    { btn16: 830, shouldMultiply: false },
                    { btn17: 1, shouldMultiply: false },
                    { btn18: 0, shouldMultiply: false },

                ]
            }, {
                screen: 3,
                btn: [
                    { btn1: 0.5, shouldMultiply: true },
                    { btn2: 0.85, shouldMultiply: true },
                    { btn3: 1.85, shouldMultiply: true },
                    { btn4: 750, shouldMultiply: false },
                    { btn5: 2, shouldMultiply: false },
                    { btn6: 1, shouldMultiply: false },
                    { btn7: 1.85, shouldMultiply: true },
                    { btn8: 1.2, shouldMultiply: true },
                    { btn9: 0.5, shouldMultiply: true },
                    { btn10: 700, shouldMultiply: false },
                    { btn11: 0, shouldMultiply: false },
                    { btn12: 1, shouldMultiply: false },
                    { btn13: 1.2, shouldMultiply: true },
                    { btn14: 1.2, shouldMultiply: true },
                    { btn15: 1.2, shouldMultiply: true },
                    { btn16: 750, shouldMultiply: false },
                    { btn17: 1, shouldMultiply: false },
                    { btn18: 0, shouldMultiply: false },

                ]
            }, {
                screen: 4,
                btn: [
                    { btn1: 0.85, shouldMultiply: true },
                    { btn2: 1.85, shouldMultiply: true },
                    { btn3: 0.85, shouldMultiply: true },
                    { btn4: 750, shouldMultiply: false },
                    { btn5: 1, shouldMultiply: false },
                    { btn6: 0, shouldMultiply: false },
                    { btn7: 0.85, shouldMultiply: true },
                    { btn8: 0.5, shouldMultiply: true },
                    { btn9: 1.85, shouldMultiply: true },
                    { btn10: 750, shouldMultiply: false },
                    { btn11: 0, shouldMultiply: false },
                    { btn12: 1, shouldMultiply: false },
                    { btn13: 0.5, shouldMultiply: true },
                    { btn14: 1.85, shouldMultiply: true },
                    { btn15: 0.5, shouldMultiply: true },
                    { btn16: 700, shouldMultiply: false },
                    { btn17: 2, shouldMultiply: false },
                    { btn18: 1, shouldMultiply: false },
                ]
            }, {
                screen: 5,
                btn: [
                    { btn1: 0.85, shouldMultiply: true },
                    { btn2: 1.85, shouldMultiply: true },
                    { btn3: 0.5, shouldMultiply: true },
                    { btn4: 700, shouldMultiply: false },
                    { btn5: 0, shouldMultiply: false },
                    { btn6: 0, shouldMultiply: false },
                    { btn7: 1.2, shouldMultiply: true },
                    { btn8: 1.2, shouldMultiply: true },
                    { btn9: 1.2, shouldMultiply: true },
                    { btn10: 750, shouldMultiply: false },
                    { btn11: 1, shouldMultiply: false },
                    { btn12: 0, shouldMultiply: false },
                    { btn13: 1.85, shouldMultiply: true },
                    { btn14: 0.5, shouldMultiply: true },
                    { btn15: 0.85, shouldMultiply: true },
                    { btn16: 750, shouldMultiply: false },
                    { btn17: 2, shouldMultiply: false },
                    { btn18: 1, shouldMultiply: false },

                ]
            },
            {
                screen: 6,
                btn: [
                    { btn1: 1.85, shouldMultiply: true },
                    { btn2: 1.2, shouldMultiply: true },
                    { btn3: 1.2, shouldMultiply: true },
                    { btn4: 700, shouldMultiply: false },
                    { btn5: 1, shouldMultiply: false },
                    { btn6: 1, shouldMultiply: false },
                    { btn7: 1.85, shouldMultiply: true },
                    { btn8: 0.85, shouldMultiply: true },
                    { btn9: 0.85, shouldMultiply: true },
                    { btn10: 750, shouldMultiply: false },
                    { btn11: 2, shouldMultiply: false },
                    { btn12: 1, shouldMultiply: false },
                    { btn13: 0.85, shouldMultiply: true },
                    { btn14: 0.85, shouldMultiply: true },
                    { btn15: 1.2, shouldMultiply: true },
                    { btn16: 750, shouldMultiply: false },
                    { btn17: 0, shouldMultiply: false },
                    { btn18: 0, shouldMultiply: false },

                ]
            }, {
                screen: 7,
                btn: [
                    { btn1: 1.2, shouldMultiply: true },
                    { btn2: 0.5, shouldMultiply: true },
                    { btn3: 0.5, shouldMultiply: true },
                    { btn4: 750, shouldMultiply: false },
                    { btn5: 2, shouldMultiply: false },
                    { btn6: 0, shouldMultiply: false },
                    { btn7: 1.2, shouldMultiply: true },
                    { btn8: 0.85, shouldMultiply: true },
                    { btn9: 1.85, shouldMultiply: true },
                    { btn10: 830, shouldMultiply: false },
                    { btn11: 0, shouldMultiply: false },
                    { btn12: 0, shouldMultiply: false },
                    { btn13: 0.5, shouldMultiply: true },
                    { btn14: 1.85, shouldMultiply: true },
                    { btn15: 1.85, shouldMultiply: true },
                    { btn16: 700, shouldMultiply: false },
                    { btn17: 0, shouldMultiply: false },
                    { btn18: 1, shouldMultiply: false },

                ]
            }, {
                screen: 8,
                btn: [
                    { btn1: 0.5, shouldMultiply: true },
                    { btn2: 0.85, shouldMultiply: true },
                    { btn3: 1.85, shouldMultiply: true },
                    { btn4: 830, shouldMultiply: false },
                    { btn5: 1, shouldMultiply: false },
                    { btn6: 1, shouldMultiply: false },
                    { btn7: 0.5, shouldMultiply: true },
                    { btn8: 1.85, shouldMultiply: true },
                    { btn9: 1.2, shouldMultiply: true },
                    { btn10: 700, shouldMultiply: false },
                    { btn11: 1, shouldMultiply: false },
                    { btn12: 0, shouldMultiply: false },
                    { btn13: 1.85, shouldMultiply: true },
                    { btn14: 0.5, shouldMultiply: true },
                    { btn15: 0.5, shouldMultiply: true },
                    { btn16: 830, shouldMultiply: false },
                    { btn17: 0, shouldMultiply: false },
                    { btn18: 1, shouldMultiply: false },

                ]
            }

        ]
    },

    {
        interview: "Click tracker 35"
        , content: `
        <div class="grupolabel1">
							<label for="">tiempocaminata</label>
							<button><span id="btn1"></span>ver</button>
							<button><span></span>ver</button>
							<button><span></span>ver</button>        
						</div>
						
		
						<div class="grupolabel2">
							<label for="">tiempocaminata</label>
							<button><span></span>ver</button>
							<button><span></span>ver</button>
							<button><span></span>ver</button>        
						</div>
		
						<div class="grupolabel3">
							<label for="">tiempocaminata</label>
							<button><span></span>ver</button>
							<button><span></span>ver</button>
							<button><span></span>ver</button>        
						</div>
						<div class="grupolabel4">
							<label for="">tiempocaminata</label>
							<button><span></span>ver</button>
							<button><span></span>ver</button>
							<button><span></span>ver</button>        
						</div>
						<div class="grupolabel5">
							<label for="">tiempocaminata</label>
							<button><span></span>ver</button>
							<button><span></span>ver</button>
							<button><span></span>ver</button>        
						</div>
						<div class="grupolabel6">
							<label for="">tiempocaminata</label>
							<button><span></span>ver</button>
							<button><span></span>ver</button>
							<button><span></span>ver</button>        
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
        interview: "Click tracker 34"
        , content: `
        <div class="grupolabel1">
							<label for="">tiempocaminata</label>
							<button><span id="btn1"></span>ver</button>
							<button><span></span>ver</button>
							<button><span></span>ver</button>        
						</div>
						
		
						<div class="grupolabel2">
							<label for="">tiempocaminata</label>
							<button><span></span>ver</button>
							<button><span></span>ver</button>
							<button><span></span>ver</button>        
						</div>
		
						<div class="grupolabel3">
							<label for="">tiempocaminata</label>
							<button><span></span>ver</button>
							<button><span></span>ver</button>
							<button><span></span>ver</button>        
						</div>
						<div class="grupolabel4">
							<label for="">tiempocaminata</label>
							<button><span></span>ver</button>
							<button><span></span>ver</button>
							<button><span></span>ver</button>        
						</div>
						<div class="grupolabel5">
							<label for="">tiempocaminata</label>
							<button><span></span>ver</button>
							<button><span></span>ver</button>
							<button><span></span>ver</button>        
						</div>
						<div class="grupolabel6">
							<label for="">tiempocaminata</label>
							<button><span></span>ver</button>
							<button><span></span>ver</button>
							<button><span></span>ver</button>        
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
        interview: "Click tracker 33"
        , content: `
        <div class="grupolabel1">
							<label for="">tiempocaminata</label>
							<button><span id="btn1"></span>ver</button>
							<button><span></span>ver</button>
							<button><span></span>ver</button>        
						</div>
						
		
						<div class="grupolabel2">
							<label for="">tiempocaminata</label>
							<button><span></span>ver</button>
							<button><span></span>ver</button>
							<button><span></span>ver</button>        
						</div>
		
						<div class="grupolabel3">
							<label for="">tiempocaminata</label>
							<button><span></span>ver</button>
							<button><span></span>ver</button>
							<button><span></span>ver</button>        
						</div>
						<div class="grupolabel4">
							<label for="">tiempocaminata</label>
							<button><span></span>ver</button>
							<button><span></span>ver</button>
							<button><span></span>ver</button>        
						</div>
						<div class="grupolabel5">
							<label for="">tiempocaminata</label>
							<button><span></span>ver</button>
							<button><span></span>ver</button>
							<button><span></span>ver</button>        
						</div>
						<div class="grupolabel6">
							<label for="">tiempocaminata</label>
							<button><span></span>ver</button>
							<button><span></span>ver</button>
							<button><span></span>ver</button>        
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
        interview: "Click tracker 32"
        , content: `
        <div class="grupolabel1">
							<label for="">tiempocaminata</label>
							<button><span id="btn1"></span>ver</button>
							<button><span></span>ver</button>
							<button><span></span>ver</button>        
						</div>
						
		
						<div class="grupolabel2">
							<label for="">tiempocaminata</label>
							<button><span></span>ver</button>
							<button><span></span>ver</button>
							<button><span></span>ver</button>        
						</div>
		
						<div class="grupolabel3">
							<label for="">tiempocaminata</label>
							<button><span></span>ver</button>
							<button><span></span>ver</button>
							<button><span></span>ver</button>        
						</div>
						<div class="grupolabel4">
							<label for="">tiempocaminata</label>
							<button><span></span>ver</button>
							<button><span></span>ver</button>
							<button><span></span>ver</button>        
						</div>
						<div class="grupolabel5">
							<label for="">tiempocaminata</label>
							<button><span></span>ver</button>
							<button><span></span>ver</button>
							<button><span></span>ver</button>        
						</div>
						<div class="grupolabel6">
							<label for="">tiempocaminata</label>
							<button><span></span>ver</button>
							<button><span></span>ver</button>
							<button><span></span>ver</button>        
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
        interview: "Click tracker 26"
        , content: `
        <div class="grupolabel1">
							<label for="">tiempocaminata</label>
							<button><span id="btn1"></span>ver</button>
							<button><span></span>ver</button>
							<button><span></span>ver</button>        
						</div>
						
		
						<div class="grupolabel2">
							<label for="">tiempocaminata</label>
							<button><span></span>ver</button>
							<button><span></span>ver</button>
							<button><span></span>ver</button>        
						</div>
		
						<div class="grupolabel3">
							<label for="">tiempocaminata</label>
							<button><span></span>ver</button>
							<button><span></span>ver</button>
							<button><span></span>ver</button>        
						</div>
						<div class="grupolabel4">
							<label for="">tiempocaminata</label>
							<button><span></span>ver</button>
							<button><span></span>ver</button>
							<button><span></span>ver</button>        
						</div>
						<div class="grupolabel5">
							<label for="">tiempocaminata</label>
							<button><span></span>ver</button>
							<button><span></span>ver</button>
							<button><span></span>ver</button>        
						</div>
						<div class="grupolabel6">
							<label for="">tiempocaminata</label>
							<button><span></span>ver</button>
							<button><span></span>ver</button>
							<button><span></span>ver</button>        
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
        interview: "Click tracker 25"
        , content: `
        <div class="grupolabel1">
							<label for="">tiempocaminata</label>
							<button><span id="btn1"></span>ver</button>
							<button><span></span>ver</button>
							<button><span></span>ver</button>        
						</div>
						
		
						<div class="grupolabel2">
							<label for="">tiempocaminata</label>
							<button><span></span>ver</button>
							<button><span></span>ver</button>
							<button><span></span>ver</button>        
						</div>
		
						<div class="grupolabel3">
							<label for="">tiempocaminata</label>
							<button><span></span>ver</button>
							<button><span></span>ver</button>
							<button><span></span>ver</button>        
						</div>
						<div class="grupolabel4">
							<label for="">tiempocaminata</label>
							<button><span></span>ver</button>
							<button><span></span>ver</button>
							<button><span></span>ver</button>        
						</div>
						<div class="grupolabel5">
							<label for="">tiempocaminata</label>
							<button><span></span>ver</button>
							<button><span></span>ver</button>
							<button><span></span>ver</button>        
						</div>
						<div class="grupolabel6">
							<label for="">tiempocaminata</label>
							<button><span></span>ver</button>
							<button><span></span>ver</button>
							<button><span></span>ver</button>        
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
        interview: "Click tracker 24"
        , content: `
        <div class="grupolabel1">
							<label for="">tiempocaminata</label>
							<button><span id="btn1"></span>ver</button>
							<button><span></span>ver</button>
							<button><span></span>ver</button>        
						</div>
						
		
						<div class="grupolabel2">
							<label for="">tiempocaminata</label>
							<button><span></span>ver</button>
							<button><span></span>ver</button>
							<button><span></span>ver</button>        
						</div>
		
						<div class="grupolabel3">
							<label for="">tiempocaminata</label>
							<button><span></span>ver</button>
							<button><span></span>ver</button>
							<button><span></span>ver</button>        
						</div>
						<div class="grupolabel4">
							<label for="">tiempocaminata</label>
							<button><span></span>ver</button>
							<button><span></span>ver</button>
							<button><span></span>ver</button>        
						</div>
						<div class="grupolabel5">
							<label for="">tiempocaminata</label>
							<button><span></span>ver</button>
							<button><span></span>ver</button>
							<button><span></span>ver</button>        
						</div>
						<div class="grupolabel6">
							<label for="">tiempocaminata</label>
							<button><span></span>ver</button>
							<button><span></span>ver</button>
							<button><span></span>ver</button>        
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
        interview: "Click tracker 23"
        , content: `
        <div class="grupolabel1">
							<label for="">tiempocaminata</label>
							<button><span id="btn1"></span>ver</button>
							<button><span></span>ver</button>
							<button><span></span>ver</button>        
						</div>
						
		
						<div class="grupolabel2">
							<label for="">tiempocaminata</label>
							<button><span></span>ver</button>
							<button><span></span>ver</button>
							<button><span></span>ver</button>        
						</div>
		
						<div class="grupolabel3">
							<label for="">tiempocaminata</label>
							<button><span></span>ver</button>
							<button><span></span>ver</button>
							<button><span></span>ver</button>        
						</div>
						<div class="grupolabel4">
							<label for="">tiempocaminata</label>
							<button><span></span>ver</button>
							<button><span></span>ver</button>
							<button><span></span>ver</button>        
						</div>
						<div class="grupolabel5">
							<label for="">tiempocaminata</label>
							<button><span></span>ver</button>
							<button><span></span>ver</button>
							<button><span></span>ver</button>        
						</div>
						<div class="grupolabel6">
							<label for="">tiempocaminata</label>
							<button><span></span>ver</button>
							<button><span></span>ver</button>
							<button><span></span>ver</button>        
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
        interview: "Click tracker 22"
        , content: `
        <div class="grupolabel1">
							<label for="">tiempocaminata</label>
							<button><span id="btn1"></span>ver</button>
							<button><span></span>ver</button>
							<button><span></span>ver</button>        
						</div>
						
		
						<div class="grupolabel2">
							<label for="">tiempocaminata</label>
							<button><span></span>ver</button>
							<button><span></span>ver</button>
							<button><span></span>ver</button>        
						</div>
		
						<div class="grupolabel3">
							<label for="">tiempocaminata</label>
							<button><span></span>ver</button>
							<button><span></span>ver</button>
							<button><span></span>ver</button>        
						</div>
						<div class="grupolabel4">
							<label for="">tiempocaminata</label>
							<button><span></span>ver</button>
							<button><span></span>ver</button>
							<button><span></span>ver</button>        
						</div>
						<div class="grupolabel5">
							<label for="">tiempocaminata</label>
							<button><span></span>ver</button>
							<button><span></span>ver</button>
							<button><span></span>ver</button>        
						</div>
						<div class="grupolabel6">
							<label for="">tiempocaminata</label>
							<button><span></span>ver</button>
							<button><span></span>ver</button>
							<button><span></span>ver</button>        
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

