class Directeur extends Employe{
    prime(){
        //Calcul de la prime annuel (différent des employés)
        var prime= (this.pay * (0.07 +(0.03*this.anciennete()))).toFixed(3);
        return prime;
    }
}