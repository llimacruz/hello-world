using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Diagnostics;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace LargePrimeNumber
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void btnGo_Click(object sender, EventArgs e)
        {
            //lstNumbers.Items.Clear();

            Stopwatch watch = new Stopwatch();
            watch.Start();

            int digits = 1;
            int.TryParse(txtDigits.Text, out digits);

            int maxPrime = FindPrimeNumbers(digits);

            watch.Stop();

            lstNumbers.Items.Add(maxPrime);

            lblTime.Text = watch.Elapsed.TotalSeconds.ToString();
        }

        int FindPrimeNumbers(int digits)
        {
            int prime = 1;
            int maxPrime = 1;
            while (prime.ToString().Length <= digits)
            {
                if (isPrime(prime))
                    maxPrime = prime;
                    //lstNumbers.Items.Add(prime);

                prime++;
            }

            return prime;
        }

        bool isPrime(int number)
        {
            if (number < 4) return true;

            for (int i = 2; i < number; i++)
            {
                if (number % i == 0)
                    return false;
            }
            return true;
        }
    }
}
