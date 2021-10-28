var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      show_menu:false,
      main:true,
      turnamens:[],
      rankings:[],
      players:[],
      matchs:[],
      data_match:[],
      points:[],
      data_point:[],
      data_matchs:true,
      matchs:[],
      header:true,
      section:true,
      show_ranking:true,
      show_player:true,
      show_turnamen:true,
      jumbo:true,
      show_single_player:false,
      show_single_turnamen:false,
      satu_turnamen:[],
      data_posisi:[
      'Penjaga gawang',
      'Bek Tengah',
      'Full Back/Wing Back',
      'Gelandang',
      'Gelandang Bertahan',
      'Gelandang Sayap',
      'Gelandang Serang',
      'Penyerang',
      ],
      sort_by:[
        'Nama',
        'Usia',
        'Jabatan',
      ],
      lokasi:[
        'Jakarta',
        'Luar Jakarta'
      ],
      lokasi_dipilih :'',
      kode_lokasi_dipilih :'',
      pilih_sort:'',
      units:[
        'Sekretariat Direktorat Jenderal Perbendaharaan',
        'Direktorat APK',
        'Direktorat BLU',
        'Direktorat PA',
        'Direktorat PKN',
        'Direktorat SITP',
        'Direktorat SMI',
        'Direktorat SP',
        'Lingkup Kanwil DKI Jakarta',
        'Lingkup Kanwil Luar Jakarta',
        
        
      ],
      posisi_dipilih:'',
      cari:'',
      tampil_grid:true,
      jumbo:true,
      tampil_detail:false,
      tampil_stats:false,
      tampil_team:true,
      player_dipilih:'',
      players1:this.players,
      posisi1_dipilih:'',
      posisi2_dipilih:'',
      unit_dipilih:'',
      data_team:[
        {'tim':'A', 'anggota':[{'tim':'A','nama':'Didyk','es2':'Sekretariat Direktorat Jenderal Perbendaharaan','posisi1':'Penjaga gawang (Goal Keeper)','posisi2':'Penjaga gawang (Goal Keeper)'},
{'tim':'A','nama':'Indri','es2':'Sekretariat Direktorat Jenderal Perbendaharaan','posisi1':'Penjaga gawang (Goal Keeper)','posisi2':'Penyerang (Forward)'},
{'tim':'A','nama':'Iwan','es2':'Sekretariat Direktorat Jenderal Perbendaharaan','posisi1':'Bek Tengah','posisi2':'Penyerang (Forward)'},
{'tim':'A','nama':'Ma ruf','es2':'Sekretariat Direktorat Jenderal Perbendaharaan','posisi1':'Gelandang Bertahan (Defensive Midfielder)','posisi2':'Bek Tengah'},
{'tim':'A','nama':'Deky','es2':'Direktorat PKN','posisi1':'Penyerang (Forward)','posisi2':'Gelandang Serang (Attacking Midfielder)'},
{'tim':'A','nama':'Ajat','es2':'Sekretariat Direktorat Jenderal Perbendaharaan','posisi1':'Penyerang (Forward)','posisi2':'Gelandang Serang (Attacking Midfielder)'},
{'tim':'A','nama':'Danang','es2':'Direktorat SMI','posisi1':'Full Back/Wing Back','posisi2':'Bek Tengah'},
{'tim':'A','nama':'Anandu','es2':'Lingkup Kanwil DKI Jakarta','posisi1':'Bek Tengah','posisi2':'Gelandang Bertahan (Defensive Midfielder)'},
{'tim':'A','nama':'Fiyan','es2':'Direktorat SP','posisi1':'Gelandang Bertahan (Defensive Midfielder)','posisi2':'Penyerang (Forward)'},
{'tim':'A','nama':'Tigis','es2':'Sekretariat Direktorat Jenderal Perbendaharaan','posisi1':'Gelandang Sayap (Winger)','posisi2':'Penyerang (Forward)'},
{'tim':'A','nama':'Silvi','es2':'Direktorat PA','posisi1':'Gelandang Serang (Attacking Midfielder)','posisi2':'Penyerang (Forward)'},
{'tim':'A','nama':'Dika','es2':'Sekretariat Direktorat Jenderal Perbendaharaan','posisi1':'Penyerang (Forward)','posisi2':'Gelandang Bertahan (Defensive Midfielder)'},
{'tim':'A','nama':'Tabah','es2':'Direktorat SP','posisi1':'Penyerang (Forward)','posisi2':'Gelandang Serang (Attacking Midfielder)'},]},
{'tim':'B', 'anggota':[{'tim':'B','nama':'Legendani','es2':'Direktorat PA','posisi1':'Full Back/Wing Back','posisi2':'Penjaga gawang (Goal Keeper)'},
{'tim':'B','nama':'Norma','es2':'Direktorat PA','posisi1':'Penjaga gawang (Goal Keeper)','posisi2':'Penyerang (Forward)'},
{'tim':'B','nama':'Untoro','es2':'Direktorat PA','posisi1':'Full Back/Wing Back','posisi2':'Bek Tengah'},
{'tim':'B','nama':'Febrian','es2':'Direktorat PA','posisi1':'Gelandang Bertahan (Defensive Midfielder)','posisi2':'Bek Tengah'},
{'tim':'B','nama':'Koni','es2':'Direktorat PA','posisi1':'Gelandang Sayap (Winger)','posisi2':'Full Back/Wing Back'},
{'tim':'B','nama':'Rani','es2':'Direktorat PA','posisi1':'Gelandang Serang (Attacking Midfielder)','posisi2':'Bek Tengah'},
{'tim':'B','nama':'Adam','es2':'Sekretariat Direktorat Jenderal Perbendaharaan','posisi1':'Bek Tengah','posisi2':'Gelandang Bertahan (Defensive Midfielder)'},
{'tim':'B','nama':'Deta','es2':'Sekretariat Direktorat Jenderal Perbendaharaan','posisi1':'Full Back/Wing Back','posisi2':'Penyerang (Forward)'},
{'tim':'B','nama':'Azman','es2':'Sekretariat Direktorat Jenderal Perbendaharaan','posisi1':'Gelandang Sayap (Winger)','posisi2':'Gelandang Serang (Attacking Midfielder)'},
{'tim':'B','nama':'Yudhi','es2':'Sekretariat Direktorat Jenderal Perbendaharaan','posisi1':'Gelandang Sayap (Winger)','posisi2':'Full Back/Wing Back'},
{'tim':'B','nama':'Zulfi/Jul','es2':'Sekretariat Direktorat Jenderal Perbendaharaan','posisi1':'Gelandang Serang (Attacking Midfielder)','posisi2':'Gelandang Bertahan (Defensive Midfielder)'},
{'tim':'B','nama':'REZA','es2':'Sekretariat Direktorat Jenderal Perbendaharaan','posisi1':'Penyerang (Forward)','posisi2':'Gelandang Sayap (Winger)'},
{'tim':'B','nama':'Enjun','es2':'Direktorat PA','posisi1':'Penyerang (Forward)','posisi2':'Bek Tengah'},]},
{'tim':'C', 'anggota':[{'tim':'C','nama':'ilham','es2':'Direktorat SMI','posisi1':'Gelandang Sayap (Winger)','posisi2':'Penjaga gawang (Goal Keeper)'},
{'tim':'C','nama':'Oki','es2':'Direktorat SMI','posisi1':'Penyerang (Forward)','posisi2':'Gelandang Bertahan (Defensive Midfielder)'},
{'tim':'C','nama':'Fang Faisal','es2':'Direktorat SMI','posisi1':'Gelandang Sayap (Winger)','posisi2':'Penyerang (Forward)'},
{'tim':'C','nama':'Indra Yusak Ardianto','es2':'Direktorat SMI','posisi1':'Gelandang Bertahan (Defensive Midfielder)','posisi2':'Penyerang (Forward)'},
{'tim':'C','nama':'rudi','es2':'Direktorat SMI','posisi1':'Gelandang Serang (Attacking Midfielder)','posisi2':'Gelandang Sayap (Winger)'},
{'tim':'C','nama':'Adnan Agung','es2':'Lingkup Kanwil DKI Jakarta','posisi1':'Gelandang Sayap (Winger)','posisi2':'Gelandang Bertahan (Defensive Midfielder)'},
{'tim':'C','nama':'Herman','es2':'Direktorat PKN','posisi1':'Bek Tengah','posisi2':'Gelandang Bertahan (Defensive Midfielder)'},
{'tim':'C','nama':'Subchan','es2':'Direktorat BLU','posisi1':'Bek Tengah','posisi2':'Penyerang (Forward)'},
{'tim':'C','nama':'Ragil','es2':'Sekretariat Direktorat Jenderal Perbendaharaan','posisi1':'Gelandang Serang (Attacking Midfielder)','posisi2':'Gelandang Sayap (Winger)'},
{'tim':'C','nama':'Harry','es2':'Direktorat PKN','posisi1':'Gelandang Sayap (Winger)','posisi2':'Gelandang Serang (Attacking Midfielder)'},
{'tim':'C','nama':'Reynaldi','es2':'Direktorat SMI','posisi1':'Gelandang Serang (Attacking Midfielder)','posisi2':'Gelandang Sayap (Winger)'},
{'tim':'C','nama':'Nugie','es2':'Sekretariat Direktorat Jenderal Perbendaharaan','posisi1':'Gelandang Serang (Attacking Midfielder)','posisi2':'Gelandang Bertahan (Defensive Midfielder)'},
{'tim':'C','nama':'Lisna','es2':'Direktorat SP','posisi1':'Penyerang (Forward)','posisi2':'Gelandang Serang (Attacking Midfielder)'},]},
{'tim':'D', 'anggota':[{'tim':'D','nama':'Angga','es2':'Direktorat BLU','posisi1':'Penjaga gawang (Goal Keeper)','posisi2':'Penjaga gawang (Goal Keeper)'},
{'tim':'D','nama':'Mo Rusna','es2':'Direktorat BLU','posisi1':'Penyerang (Forward)','posisi2':'Gelandang Serang (Attacking Midfielder)'},
{'tim':'D','nama':'Arif','es2':'Direktorat BLU','posisi1':'Gelandang Sayap (Winger)','posisi2':'Penyerang (Forward)'},
{'tim':'D','nama':'AnggaRa','es2':'Direktorat BLU','posisi1':'Bek Tengah','posisi2':'Gelandang Bertahan (Defensive Midfielder)'},
{'tim':'D','nama':'Sintong','es2':'Direktorat BLU','posisi1':'Gelandang Bertahan (Defensive Midfielder)','posisi2':'Gelandang Serang (Attacking Midfielder)'},
{'tim':'D','nama':'Rosyid','es2':'Direktorat BLU','posisi1':'Full Back/Wing Back','posisi2':'Gelandang Bertahan (Defensive Midfielder)'},
{'tim':'D','nama':'Dekta','es2':'Direktorat BLU','posisi1':'Full Back/Wing Back','posisi2':'Gelandang Bertahan (Defensive Midfielder)'},
{'tim':'D','nama':'Rizky','es2':'Direktorat PKN','posisi1':'Bek Tengah','posisi2':'Gelandang Bertahan (Defensive Midfielder)'},
{'tim':'D','nama':'Ferik','es2':'Direktorat PKN','posisi1':'Full Back/Wing Back','posisi2':'Gelandang Bertahan (Defensive Midfielder)'},
{'tim':'D','nama':'arifin','es2':'Sekretariat Direktorat Jenderal Perbendaharaan','posisi1':'Gelandang Sayap (Winger)','posisi2':'Penyerang (Forward)'},
{'tim':'D','nama':'Mukhlis','es2':'Direktorat APK','posisi1':'Gelandang Bertahan (Defensive Midfielder)','posisi2':'Gelandang Serang (Attacking Midfielder)'},
{'tim':'D','nama':'Miko','es2':'Sekretariat Direktorat Jenderal Perbendaharaan','posisi1':'Gelandang Serang (Attacking Midfielder)','posisi2':'Gelandang Bertahan (Defensive Midfielder)'},
{'tim':'D','nama':'kamal','es2':'Direktorat SITP','posisi1':'Gelandang Bertahan (Defensive Midfielder)','posisi2':'Gelandang Serang (Attacking Midfielder)'},
{'tim':'D','nama':'Tino','es2':'Direktorat SITP','posisi1':'Penyerang (Forward)','posisi2':'Gelandang Serang (Attacking Midfielder)'},]},
{'tim':'E', 'anggota':[{'tim':'E','nama':'Roland','es2':'Direktorat PKN','posisi1':'Penjaga gawang (Goal Keeper)','posisi2':'Full Back/Wing Back'},
{'tim':'E','nama':'Dayu','es2':'Direktorat PKN','posisi1':'Gelandang Sayap (Winger)','posisi2':'Gelandang Serang (Attacking Midfielder)'},
{'tim':'E','nama':'Dwi Purwohartono (Talgiono)','es2':'Direktorat PKN','posisi1':'Full Back/Wing Back','posisi2':'Bek Tengah'},
{'tim':'E','nama':'Elyas','es2':'Direktorat PKN','posisi1':'Bek Tengah','posisi2':'Gelandang Bertahan (Defensive Midfielder)'},
{'tim':'E','nama':'Adi, seringe diceluk Plumpang','es2':'Direktorat PKN','posisi1':'Bek Tengah','posisi2':'Gelandang Bertahan (Defensive Midfielder)'},
{'tim':'E','nama':'Julian Alhaj (Julian )','es2':'Direktorat PKN','posisi1':'Gelandang Bertahan (Defensive Midfielder)','posisi2':'Gelandang Serang (Attacking Midfielder)'},
{'tim':'E','nama':'bona','es2':'Direktorat PKN','posisi1':'Full Back/Wing Back','posisi2':'Gelandang Sayap (Winger)'},
{'tim':'E','nama':'Farid','es2':'Lingkup Kanwil DKI Jakarta','posisi1':'Bek Tengah','posisi2':'Gelandang Bertahan (Defensive Midfielder)'},
{'tim':'E','nama':'Rasvan','es2':'Sekretariat Direktorat Jenderal Perbendaharaan','posisi1':'Gelandang Sayap (Winger)','posisi2':'Full Back/Wing Back'},
{'tim':'E','nama':'Mulya','es2':'Lingkup Kanwil DKI Jakarta','posisi1':'Gelandang Sayap (Winger)','posisi2':'Penyerang (Forward)'},
{'tim':'E','nama':'DS','es2':'Sekretariat Direktorat Jenderal Perbendaharaan','posisi1':'Gelandang Serang (Attacking Midfielder)','posisi2':'Penyerang (Forward)'},
{'tim':'E','nama':'Al','es2':'Direktorat SP','posisi1':'Penyerang (Forward)','posisi2':'Gelandang Sayap (Winger)'},
{'tim':'E','nama':'dhymaz (Hamdan Adhymaz Pratama)','es2':'Direktorat BLU','posisi1':'Penyerang (Forward)','posisi2':'Gelandang Serang (Attacking Midfielder)'},]},
{'tim':'F', 'anggota':[{'tim':'F','nama':'Pandu','es2':'Direktorat SITP','posisi1':'Penjaga gawang (Goal Keeper)','posisi2':'Bek Tengah'},
{'tim':'F','nama':'inu','es2':'Direktorat SITP','posisi1':'Gelandang Serang (Attacking Midfielder)','posisi2':'Penyerang (Forward)'},
{'tim':'F','nama':'Jacson','es2':'Direktorat SITP','posisi1':'Penyerang (Forward)','posisi2':'Gelandang Serang (Attacking Midfielder)'},
{'tim':'F','nama':'Ganang','es2':'Direktorat SP','posisi1':'Full Back/Wing Back','posisi2':'Gelandang Bertahan (Defensive Midfielder)'},
{'tim':'F','nama':'Fajar G.Y.','es2':'Direktorat APK','posisi1':'Gelandang Serang (Attacking Midfielder)','posisi2':'Gelandang Bertahan (Defensive Midfielder)'},
{'tim':'F','nama':'Awi','es2':'Direktorat APK','posisi1':'Penyerang (Forward)','posisi2':'Gelandang Serang (Attacking Midfielder)'},
{'tim':'F','nama':'Miftah muhamad wazni','es2':'Direktorat SITP','posisi1':'Bek Tengah','posisi2':'Gelandang Bertahan (Defensive Midfielder)'},
{'tim':'F','nama':'Tyo','es2':'Direktorat PA','posisi1':'Full Back/Wing Back','posisi2':'Gelandang Sayap (Winger)'},
{'tim':'F','nama':'Fanny','es2':'Direktorat BLU','posisi1':'Gelandang Sayap (Winger)','posisi2':'Penyerang (Forward)'},
{'tim':'F','nama':'Mamiek','es2':'Direktorat PKN','posisi1':'Gelandang Bertahan (Defensive Midfielder)','posisi2':'Gelandang Serang (Attacking Midfielder)'},
{'tim':'F','nama':'Tangkas nugroho','es2':'Direktorat PA','posisi1':'Gelandang Sayap (Winger)','posisi2':'Full Back/Wing Back'},
{'tim':'F','nama':'Soule','es2':'Direktorat SMI','posisi1':'Penyerang (Forward)','posisi2':'Gelandang Sayap (Winger)'},
{'tim':'F','nama':'AZIZ','es2':'Direktorat PA','posisi1':'Penyerang (Forward)','posisi2':'Bek Tengah'},]},
{'tim':'G', 'anggota':[{'tim':'G','nama':'Adip','es2':'Lingkup Kanwil DKI Jakarta','posisi1':'Penyerang (Forward)','posisi2':'Penjaga gawang (Goal Keeper)'},
{'tim':'G','nama':'Yosi Rizal','es2':'Direktorat PKN','posisi1':'Gelandang Sayap (Winger)','posisi2':'Penyerang (Forward)'},
{'tim':'G','nama':'Deni','es2':'Direktorat PKN','posisi1':'Gelandang Serang (Attacking Midfielder)','posisi2':'Penyerang (Forward)'},
{'tim':'G','nama':'Ulum','es2':'Direktorat SMI','posisi1':'Gelandang Sayap (Winger)','posisi2':'Penyerang (Forward)'},
{'tim':'G','nama':'Ikun','es2':'Direktorat PKN','posisi1':'Penyerang (Forward)','posisi2':'Gelandang Sayap (Winger)'},
{'tim':'G','nama':'Nanang','es2':'Direktorat PKN','posisi1':'Penyerang (Forward)','posisi2':'Gelandang Serang (Attacking Midfielder)'},
{'tim':'G','nama':'Arda','es2':'Lingkup Kanwil DKI Jakarta','posisi1':'Penyerang (Forward)','posisi2':'Gelandang Sayap (Winger)'},
{'tim':'G','nama':'Gading','es2':'Direktorat PKN','posisi1':'Bek Tengah','posisi2':'Gelandang Bertahan (Defensive Midfielder)'},
{'tim':'G','nama':'Hafidz','es2':'Direktorat SITP','posisi1':'Bek Tengah','posisi2':'Gelandang Bertahan (Defensive Midfielder)'},
{'tim':'G','nama':'Fashhan','es2':'Direktorat PKN','posisi1':'Gelandang Sayap (Winger)','posisi2':'Penyerang (Forward)'},
{'tim':'G','nama':'Hanif','es2':'Direktorat PKN','posisi1':'Gelandang Bertahan (Defensive Midfielder)','posisi2':'Bek Tengah'},
{'tim':'G','nama':'Putut Yoga','es2':'Direktorat SMI','posisi1':'Gelandang Bertahan (Defensive Midfielder)','posisi2':'Gelandang Serang (Attacking Midfielder)'},
{'tim':'G','nama':'Jihad','es2':'Direktorat SITP','posisi1':'Penyerang (Forward)','posisi2':'Gelandang Sayap (Winger)'},]},
{'tim':'H', 'anggota':[{'tim':'H','nama':'Todo','es2':'Sekretariat Direktorat Jenderal Perbendaharaan','posisi1':'Penjaga gawang (Goal Keeper)','posisi2':'Bek Tengah'},
{'tim':'H','nama':'Nadhif','es2':'Direktorat BLU','posisi1':'Penyerang (Forward)','posisi2':'Penjaga gawang (Goal Keeper)'},
{'tim':'H','nama':'Oriy Sagala','es2':'Lingkup Kanwil DKI Jakarta','posisi1':'Penyerang (Forward)','posisi2':'Gelandang Serang (Attacking Midfielder)'},
{'tim':'H','nama':'Yongki','es2':'Direktorat APK','posisi1':'Penyerang (Forward)','posisi2':'Gelandang Sayap (Winger)'},
{'tim':'H','nama':'Sriharioto','es2':'Direktorat PKN','posisi1':'Gelandang Serang (Attacking Midfielder)','posisi2':'Gelandang Bertahan (Defensive Midfielder)'},
{'tim':'H','nama':'Deri','es2':'Lingkup Kanwil DKI Jakarta','posisi1':'Gelandang Bertahan (Defensive Midfielder)','posisi2':'Penyerang (Forward)'},
{'tim':'H','nama':'Ferry','es2':'Direktorat BLU','posisi1':'Bek Tengah','posisi2':'Gelandang Bertahan (Defensive Midfielder)'},
{'tim':'H','nama':'Wisnu','es2':'Direktorat PKN','posisi1':'Gelandang Bertahan (Defensive Midfielder)','posisi2':'Penyerang (Forward)'},
{'tim':'H','nama':'Imam','es2':'Sekretariat Direktorat Jenderal Perbendaharaan','posisi1':'Gelandang Sayap (Winger)','posisi2':'Full Back/Wing Back'},
{'tim':'H','nama':'Mahdi','es2':'Sekretariat Direktorat Jenderal Perbendaharaan','posisi1':'Gelandang Bertahan (Defensive Midfielder)','posisi2':'Penyerang (Forward)'},
{'tim':'H','nama':'luthfian hanif (luthfi)','es2':'Sekretariat Direktorat Jenderal Perbendaharaan','posisi1':'Gelandang Serang (Attacking Midfielder)','posisi2':'Gelandang Bertahan (Defensive Midfielder)'},
{'tim':'H','nama':'Agatha','es2':'Sekretariat Direktorat Jenderal Perbendaharaan','posisi1':'Penyerang (Forward)','posisi2':'Gelandang Sayap (Winger)'},
{'tim':'H','nama':'Reza','es2':'Sekretariat Direktorat Jenderal Perbendaharaan','posisi1':'Penyerang (Forward)','posisi2':'Gelandang Sayap (Winger)'},
{'tim':'H','nama':'Akhlis','es2':'Sekretariat Direktorat Jenderal Perbendaharaan','posisi1':'Penyerang (Forward)','posisi2':'Gelandang Serang (Attacking Midfielder)'},]},



      ],



    },
    computed:{
      FilterPosisi: function(){
        return this.players.filter(guide => {
          return guide.posisi1.toLowerCase().includes(this.posisi1_dipilih.toLowerCase())
            && guide.posisi2.toLowerCase().includes(this.posisi2_dipilih.toLowerCase())
            && guide.es2.toLowerCase().includes(this.unit_dipilih.toLowerCase())
            && guide.lokasi.toLowerCase().includes(this.kode_lokasi_dipilih.toLowerCase())
        })



        // let aa = this.players.filter((blog) => {
        //     return blog.posisi1.toLowerCase().match(this.posisi_dipilih.toLowerCase())
        // });
        let bb = this.players.filter((blog1) => {
          return blog1.posisi2.toLowerCase().match(this.posisi_dipilih.toLowerCase())
      });
      return  bb;
    },

      HasilCari: function(){
        return this.FilterPosisi.filter((blog) => {
            return blog.nama.toLowerCase().match(this.cari.toLowerCase()) 
        });
    },

    urutPlayers(){
        function compareNama(a, b) {
          if (a.nama < b.nama)
            return -1;
          if (a.nama > b.nama)
            return 1;
          return 0;
        }

        function compareUsia(a, b) {
          if (a.usia > b.usia)
            return -1;
          if (a.usia < b.usia)
            return 1;
          return 0;
        }

        function compareJab(a, b) {
          if (a.kode_jab < b.kode_jab)
            return -1;
          if (a.kode_jab > b.kode_jab)
            return 1;
          return 0;
        }
        
        if(this.pilih_sort == ''){
          return this.HasilCari.sort(compareJab);
        }if(this.pilih_sort == 'Nama'){
          return this.HasilCari.sort(compareNama);
        }if(this.pilih_sort == 'Jabatan'){
          return this.HasilCari.sort(compareJab);
        }else{
          // alert('B');
          return this.HasilCari.sort(compareUsia);
        }

      },


      jumlah_player(){
        if(this.urutPlayers){
          return this.urutPlayers.length;
        }
        
    
        
      },
      urutTurnaments(){
        function compare(a, b) {
          if (a.row > b.row)
            return -1;
          if (a.row < b.row)
            return 1;
          return 0;
        }
    
        return this.turnamens.sort(compare);
      },
      data_match_sort(){
        function compare1(a, b) {
          if (a.row > b.row)
            return -1;
          if (a.row < b.row)
            return 1;
          return 0;
        }
    
        return this.data_match[0].sort(compare1);
      },
      data_point_sort(){
        function compare1(a, b) {
          if (a.row > b.row)
            return -1;
          if (a.row < b.row)
            return 1;
          return 0;
        }
    
        return this.data_point.sort(compare1);
      },




    },
    
    methods:{
      show_team(){
        this.tampil_grid=false; 
        this.jumbo=false; 
        this.tampil_detail=false; 
        this.tampil_stats=false; 
        this.posisi_dipilih=''
        this.tampil_team = true;
      },
      show_jumbo(){
        this.tampil_grid=true; 
        this.jumbo=true; 
        this.tampil_detail=true; 
        this.tampil_stats=true; 
        this.posisi_dipilih=''
        this.tampil_team = true;
      },
      show_players(){
        this.tampil_grid=true; 
        this.jumbo=false; 
        this.tampil_detail=false; 
        this.tampil_stats=false; 
        this.posisi_dipilih=''
        this.tampil_team = false;
      },
      show_stats(){
        this.tampil_grid=false; 
        this.jumbo=false; 
        this.tampil_detail=false; 
        this.tampil_stats=true; 
        this.posisi_dipilih=''
        this.tampil_team = false;
      },
      filt_lokasi(x){
        if(x == 'Jakarta'){
          this.lokasi_dipilih = x;
          this.kode_lokasi_dipilih = '1';
        }
        if(x == 'Luar Jakarta'){
          this.lokasi_dipilih = x;
          this.kode_lokasi_dipilih = '2';
        }
        // alert(this.lokasi_dipilih);
      },
      highlight(itemToHighlight) {
        if(!this.posisi_dipilih) {
          return 'Posisi' + itemToHighlight;
        }
        return itemToHighlight.replace(new RegExp(this.posisi_dipilih, "ig"), match => {
          return 'Posisi : <b>' + this.posisi_dipilih + '</b>' + (match.replace(this.posisi_dipilih, ''));
        });
      },
        tampilkan_detail(a){
          this.tampil_detail = true;
          this.tampil_grid = false;
          this.tampil_stats=false;
          this.jumbo = false;
          this.player_dipilih = a;
        },

        ambil_data_players(){
          var url ="https://script.google.com/macros/s/AKfycbwN4otc9HbfN2pLSkye7BCNExpYJxUrCw0IE0ktVea0GWv0DgugEE01-6zjNrB5lZ9mhA/exec?action=read&table=players";

          $.getJSON(url, function (json) {
          // console.log(json.data);
          // console.log(json.data.records)
          app.players = json.data;
          });

        },

        
        ambil_data_team(){
          var url ="https://script.google.com/macros/s/AKfycbwN4otc9HbfN2pLSkye7BCNExpYJxUrCw0IE0ktVea0GWv0DgugEE01-6zjNrB5lZ9mhA/exec?action=read&table=teams";

          $.getJSON(url, function (json) {
          // console.log(json.data);
          // console.log(json.data.records)
          app.data_team = json.data;
          });

        },

        updateFoto(){
            // alert('update')
            // var waktu1 = Date.now();
            if(this.player_dipilih.link_foto){
            var waktu1 = Date.now();
            var ifoto = this.player_dipilih.link_foto.toString();
            var ino = this.player_dipilih.id.toString();
            var url = `https://script.google.com/macros/s/AKfycbwN4otc9HbfN2pLSkye7BCNExpYJxUrCw0IE0ktVea0GWv0DgugEE01-6zjNrB5lZ9mhA/exec?action=update&table=players&id=${ino}&data={"link_foto":"${ifoto}"}`
            // this.test = url;
            // timestamp=${itimestamp}
            $.ajax({
            type: 'GET',
            url: url,
            crossDomain: true,
            dataType: 'jsonp',
            dataType: "text",
            success: function(resultData) { 
                alert('Update Foto Selesai')
                app.players = [];
                app.ambil_data_players();
                app.tampil_detail = false;
                app.tampil_grid = true;
            }
            });
            this.edit1 = false;
          }
          else{
            alert('data tidak boleh kosong')
          }
        },
        pilih_posisi(x){
          this.posisi1_dipilih = x 
          this.tampil_detail = false;
          this.tampil_grid = true;
          this.jumbo = false;


          
        },





        showOff(){
          this.header =false;
          // this.main = false;
          this.show_player = false;
          this.jumbo = false;
          this.show_ranking = false;
          this.show_turnamen = false;
          this.show_single_player = false;
          this.show_single_turnamen = false;

        },
        showAll(){
          this.header =true;
          // this.main = false;
          this.show_player = true;
          this.jumbo = true;
          this.show_ranking = true;
          this.show_turnamen = true;
          this.show_single_player = false;

        },
        mklikMenu(){
            // this.showOff();
            this.main = false;
            this.show_menu = true;
        },
        klikPlayer(x){
          this.showOff();
          this.header = true;
          this.section = true;
          this.show_single_player = true;
          // this.selectedPlayer = x;
          console.log(x);
          this.ambil_data_player(x);

        },
        ambil_data_player(id){
          this.selectedPlayer = [];
            var data_ranking = [];
            data_ranking = this.rankings.filter(x => x.id === id.id);
            // console.log(data_ranking);

            var data_player = [];
            data_player = this.players.filter(x => x.id === id.id);
            var selectedPlayer1 = data_ranking.concat(data_player);
            // console.log(selectedPlayer1);

            var data_match1 = [];
            data_match1 = this.matchs.filter(x => x.player1 == id.player||x.player2 == id.player||x.player3 == id.player ||x.player4 == id.player);
            // console.log(data_match1);

            this.data_match = [data_match1];
            
            var data_point = [];
            data_point = this.points.filter(x => x.id === id.id);
            this.data_point = data_point;
            // console.log(selectedPlayer1);
            
            var ranking_player = data_ranking.concat(data_player);



            var selectedPlayer1 = ranking_player.concat([this.data_match_sort]);

            var selectedPlayer2 = selectedPlayer1.concat([this.data_point_sort]);
            // console.log(selectedPlayer1);


          return this.selectedPlayer = selectedPlayer2;
        
        },
        klikRanking(){
          this.show_menu = false;
          this.main = true;
          this.showOff();
          this.header = true;
          this.show_ranking = true;

        },
        klikTurnamen(){
          this.show_menu = false;
          this.main = true;
          this.showOff();
          this.header = true;
          this.show_turnamen = true;

        },
        klikPlayers(){
          this.showOff();
          this.main = true;
          this.header = true;
          this.show_menu = false;
          this.show_player = true;

        },
        klikTurnamen(){
          this.showOff();
          this.main = true;
          this.header = true;
          this.show_menu = false;
          this.show_turnamen = true;
          

        },
        klik_satu_turnamen(xx){
          this.showOff();
          this.main = true;
          this.header = true;
          this.show_menu = false;
          this.show_turnamen = false;
          this.show_single_turnamen = true;

          var abc = this.points.filter(x => x.turnamen == xx.nama);
          var bcd = this.matchs.filter(x => x.turnamen == xx.nama);
          var foto = xx.foto;
          var nama_turnamen = xx.nama;
          return this.satu_turnamen = [abc, bcd, foto, nama_turnamen];
        }



    },

    created(){
      // ambil data rangking
      this.rankings = [];

      var url ="https://script.google.com/macros/s/AKfycbx6jx9ZCEFAe7tdpSnNAvzyLkEB__oEsA08wA3YhBcBbH-aDZZhK6la_yvEUh3fUWf17g/exec?action=read&table=QPoints";

      $.getJSON(url, function (json) {
      // console.log(json.data);
      // console.log(json.data.records)
      app.rankings = json.data;
      });

      // ambil data players
      this.rankings = [];

      var url ="https://script.google.com/macros/s/AKfycbwN4otc9HbfN2pLSkye7BCNExpYJxUrCw0IE0ktVea0GWv0DgugEE01-6zjNrB5lZ9mhA/exec?action=read&table=players";

      $.getJSON(url, function (json) {
      // console.log(json.data);
      // console.log(json.data.records)
      app.players = json.data;
      });

      // ambil data match
      this.matchs = [];

      var url ="https://script.google.com/macros/s/AKfycbx6jx9ZCEFAe7tdpSnNAvzyLkEB__oEsA08wA3YhBcBbH-aDZZhK6la_yvEUh3fUWf17g/exec?action=read&table=match";

      $.getJSON(url, function (json) {
      // console.log(json.data);
      // console.log(json.data.records)
      app.matchs = json.data;
      });

            // ambil data point
            this.matchs = [];

            var url ="https://script.google.com/macros/s/AKfycbx6jx9ZCEFAe7tdpSnNAvzyLkEB__oEsA08wA3YhBcBbH-aDZZhK6la_yvEUh3fUWf17g/exec?action=read&table=points";
      
            $.getJSON(url, function (json) {
            // console.log(json.data);
            // console.log(json.data.records)
            app.points = json.data;
            });

            // ambil data turnament
            this.turnamens = [];

            var url ="https://script.google.com/macros/s/AKfycbx6jx9ZCEFAe7tdpSnNAvzyLkEB__oEsA08wA3YhBcBbH-aDZZhK6la_yvEUh3fUWf17g/exec?action=read&table=turnament";
      
            $.getJSON(url, function (json) {
            // console.log(json.data);
            // console.log(json.data.records)
            app.turnamens = json.data;
            });

    },

  })
