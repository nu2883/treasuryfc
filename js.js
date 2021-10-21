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
      data_posisi:['Bek Tengah',
      'Full Back/Wing Back',
      'Gelandang Bertahan (Defensive Midfielder)',
      'Gelandang Sayap (Winger)',
      'Gelandang Serang (Attacking Midfielder)',
      'Penjaga gawang (Goal Keeper)',
      'Penyerang (Forward)',
      ],
      posisi_dipilih:'',
      cari:'',
      tampil_grid:true,
      jumbo:true,
      tampil_detail:false,
      player_dipilih:'',



    },
    computed:{
      HasilCari: function(){
        return this.players.filter((blog) => {
            return blog.nama.toLowerCase().match(this.cari.toLowerCase()) 
        });
    },

      urutPlayers(){
        function compare(a, b) {
          if (a.player < b.player)
            return -1;
          if (a.player > b.player)
            return 1;
          return 0;
        }
    
        return this.players.sort(compare);
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
        tampilkan_detail(a){
          this.tampil_detail = true;
          this.tampil_grid = false;
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