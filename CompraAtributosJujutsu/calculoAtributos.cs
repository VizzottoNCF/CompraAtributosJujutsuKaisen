namespace calculoAtributos
{
    public partial class Page1 : INotifyPropertyChanged
    {
        private string _pointsDisplay;
        public int ForMOD;
        public int DesMOD;
        public int ConMOD;
        public int IntMOD;
        public int SabMOD;
        public int CarMOD;
        public int ForOR;
        public int DesOR;
        public int ConOR;
        public int IntOR;
        public int SabOR;
        public int CarOR;
        public int ForBON;
        public int DesBON;
        public int ConBON;
        public int IntBON;
        public int SabBON;
        public int CarBON;
        // Properties for Point Buy values
        private int _forPB; // Força Point Buy
        public int ForPB
        {
            get { return _forPB; }
            set
            {
                if (_forPB != value)
                {
                    _forPB = value;
                    OnPropertyChanged();
                }
            }
        }

        private int _desPB; // Destreza Point Buy
        public int DesPB
        {
            get { return _desPB; }
            set
            {
                if (_desPB != value)
                {
                    _desPB = value;
                    OnPropertyChanged();
                }
            }
        }
        private int _conPB; // Constituição Point Buy
        public int ConPB
        {
            get { return _conPB; }
            set
            {
                if (_conPB != value)
                {
                    _conPB = value;
                    OnPropertyChanged();
                }
            }
        }
        private int _intPB; // Inteligência Point Buy
        public int IntPB
        {
            get { return _intPB; }
            set
            {
                if (_intPB != value)
                {
                    _intPB = value;
                    OnPropertyChanged();
                }
            }
        }
        private int _sabPB; // Sabedoria Point Buy
        public int SabPB
        {
            get { return _sabPB; }
            set
            {
                if (_sabPB != value)
                {
                    _sabPB = value;
                    OnPropertyChanged();
                }
            }
        }
        private int _carPB; // Carisma Point Buy
        public int CarPB
        {
            get { return _carPB; }
            set
            {
                if (_carPB != value)
                {
                    _carPB = value;
                    OnPropertyChanged();
                }
            }
        }
        public int ForT
        {
            get { return 10 + ForPB + ForOR + ForBON; } // Example calculation based on ForPB
        }

        public int DesT
        {
            get { return 10 + DesPB + DesOR + DesBON; } // Example calculation based on DesPB
        }

        public int ConT
        {
            get { return 10 + ConPB + ConOR + ConBON; } // Example calculation based on ConPB
        }

        public int IntT
        {
            get { return 10 + IntPB + IntOR + IntBON; } // Example calculation based on IntPB
        }

        public int SabT
        {
            get { return 10 + SabPB + SabOR + SabBON; } // Example calculation based on SabPB
        }

        public int CarT
        {
            get { return 10 + CarPB + CarOR + CarBON; } // Example calculation based on CarPB
        }

        // Similarly, implement OnPropertyChanged for other Point Buy properties

        // Property for Total Points
        // Implement similar to Point Buy properties



        // Property for Points Display
        public string PointsDisplay
        {
            get { return _pointsDisplay; }
            set
            {
                if (_pointsDisplay != value)
                {
                    _pointsDisplay = value;
                    OnPropertyChanged();
                }
            }
        }

        public event PropertyChangedEventHandler PropertyChanged;

        protected virtual void OnPropertyChanged([CallerMemberName] string propertyName = null)
        {
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
            updateAttributes();
        }
        private void updateAttributes()
        {
            updateFor();
            updateDes();
            updateCon();
            updateInt();
            updateSab();
            updateCar();
            _pointsDisplay = (21 + ForMOD + DesMOD + ConMOD + IntMOD + SabMOD + CarMOD).ToString();
        }
        // From here, update how much each attribute costs in point buy
        //Calculate points left from point buy
        // variables ending in PB mean Point Buy, and they can range from value 8 to 15
        // Point Buy 8 = PointsDisplay +2
        // Point Buy 9 = PointsDisplay +1
        // Point Buy 10 = PointsDisplay +0
        // Point Buy 11 = PointsDisplay -2
        // Point Buy 12 = PointsDisplay -3
        // Point Buy 13 = PointsDisplay -4
        // Point Buy 14 = PointsDisplay -5
        // Point Buy 15 = PointsDisplay -7

        private void updateFor()
        {
            if (ForPB == 8)
            {
                ForMOD = 2;
            }
            if (ForPB == 9)
            {
                ForMOD = 1;
            }
            if (ForPB == 10)
            {
                ForMOD = 0;
            }
            if (ForPB == 11)
            {
                ForMOD = -2;
            }
            if (ForPB == 12)
            {
                ForMOD = -3;
            }
            if (ForPB == 13)
            {
                ForMOD = -4;
            }
            if (ForPB == 14)
            {
                ForMOD = -5;
            }
            if (ForPB == 15)
            {
                ForMOD = -7;
            }
        }
        private void updateDes()
        {
            if (DesPB == 8)
            {
                DesMOD = 2;
            }
            if (DesPB == 9)
            {
                DesMOD = 1;
            }
            if (DesPB == 10)
            {
                DesMOD = 0;
            }
            if (DesPB == 11)
            {
                DesMOD = -2;
            }
            if (DesPB == 12)
            {
                DesMOD = -3;
            }
            if (DesPB == 13)
            {
                DesMOD = -4;
            }
            if (DesPB == 14)
            {
                DesMOD = -5;
            }
            if (DesPB == 15)
            {
                DesMOD = -7;
            }
        }
        private void updateCon()
        {
            if (ConPB == 8)
            {
                ConMOD = 2;
            }
            if (ConPB == 9)
            {
                ConMOD = 1;
            }
            if (ConPB == 10)
            {
                ConMOD = 0;
            }
            if (ConPB == 11)
            {
                ConMOD = -2;
            }
            if (ConPB == 12)
            {
                ConMOD = -3;
            }
            if (ConPB == 13)
            {
                ConMOD = -4;
            }
            if (ConPB == 14)
            {
                ConMOD = -5;
            }
            if (ConPB == 15)
            {
                ConMOD = -7;
            }
        }
        private void updateInt()
        {
            if (IntPB == 8)
            {
                IntMOD = 2;
            }
            if (IntPB == 9)
            {
                IntMOD = 1;
            }
            if (IntPB == 10)
            {
                IntMOD = 0;
            }
            if (IntPB == 11)
            {
                IntMOD = -2;
            }
            if (IntPB == 12)
            {
                IntMOD = -3;
            }
            if (IntPB == 13)
            {
                IntMOD = -4;
            }
            if (IntPB == 14)
            {
                IntMOD = -5;
            }
            if (IntPB == 15)
            {
                IntMOD = -7;
            }
        }
        private void updateSab()
        {
            if (SabPB == 8)
            {
                SabMOD = 2;
            }
            if (SabPB == 9)
            {
                SabMOD = 1;
            }
            if (SabPB == 10)
            {
                SabMOD = 0;
            }
            if (SabPB == 11)
            {
                SabMOD = -2;
            }
            if (SabPB == 12)
            {
                SabMOD = -3;
            }
            if (SabPB == 13)
            {
                SabMOD = -4;
            }
            if (SabPB == 14)
            {
                SabMOD = -5;
            }
            if (SabPB == 15)
            {
                SabMOD = -7;
            }
        }
        private void updateCar()
        {
            if (CarPB == 8)
            {
                CarMOD = 2;
            }
            if (CarPB == 9)
            {
                CarMOD = 1;
            }
            if (CarPB == 10)
            {
                CarMOD = 0;
            }
            if (CarPB == 11)
            {
                CarMOD = -2;
            }
            if (CarPB == 12)
            {
                CarMOD = -3;
            }
            if (CarPB == 13)
            {
                CarMOD = -4;
            }
            if (CarPB == 14)
            {
                CarMOD = -5;
            }
            if (CarPB == 15)
            {
                CarMOD = -7;
            }
        }
    }
