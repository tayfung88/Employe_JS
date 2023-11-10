class Employe {
    constructor(lastname,firstname,employement,department,job,pay,
                agence,kid){                    
        this.lastname=lastname;
        this.firstname=firstname;
        this.employement=employement;
        this.department=department;
        this.job=job;
        this.pay=pay; 
        this.agence=agence;
          
        this.kid=kid;        
    }

    anciennete(){     
        //Calcul l'ancieneté
        var dateEmployement = new Date(this.employement); 
        var today = new Date; 
		/* marche Po */
        var anciennete = Math.floor((today.getTime() - dateEmployement.getTime())/(1000 * 3600 * 24*365.25));
        return anciennete  
    }

    VerifAnciennete(){
        //Affiche l'ancienneté
        console.log (this.firstname+" "+this.lastname+" est employé.e au service "+this.department+" depuis "+this.anciennete()+" ans"  )
    }

    prime(){
        //Calcul la prime annuel (trois chiffre après la virgule)
        var prime= (this.pay * (0.05 +(0.02*this.anciennete()))).toFixed(2);
        return prime;
    }

    VersementPrime(){
        //Vérifie si la prime peut être versée
        var today = new Date; 
        //Month commence à 0
        if(today.getMonth()==9 && today.getDate()== 30) {
            console.log("Une prime de "+this.prime()+" € a été versée à "+this.firstname+" "+this.lastname)
        }        
    }

    ChequeVacance(){
        //Calcul si l'employé à le droit aux chèques vacances
        var ChequeVacance;
        if (this.anciennete()!=0){
            console.log(this.firstname+" "+this.lastname+' a le droit aux chèques vacances')
        }
        else{
            console.log(this.firstname+" "+this.lastname+" n'a pas le droit au chèques vacances")
        }
    }

    ChequeNoel(){        
        //Vérifie que l'employé à des enfants 
        //et calcul le montant du chèque pour chaques enfant ayant moins de 19 ans
        var ChequeNoel=0;    
        
       if (this.kid != null && this.kid != 'undefined'){
            this.kid.forEach(function(enfant) {
                if(enfant<=10){
                    ChequeNoel += 20;
                }
                else if (enfant<=15) {
                    ChequeNoel += 30;
                }
                else if (enfant<=18) {
                    ChequeNoel += 50;
                }
            });  
            if (ChequeNoel !=0)
            {                      
                console.log  (this.firstname+" "+this.lastname+' a le droit à un chèque de noël d\'un montant de ' + ChequeNoel+' €')
            }
        }
    }
 }
