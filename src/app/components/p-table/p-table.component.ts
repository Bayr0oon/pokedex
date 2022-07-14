import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-p-table',
  templateUrl: './p-table.component.html',
  styleUrls: ['./p-table.component.scss']
})
export class PTableComponent implements OnInit {
  pokemon:any = '';

  displayedColumns: string[] = ['position', 'image', 'name']
  data: any[] = []
  dataSource = new MatTableDataSource<any>(this.data);
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  pokemons = [];
  isDobleType: boolean = false
  constructor(private pokemonService: PokemonService, private router: Router) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
    let pokeData;
    for (let i = 1; i <= 905; i++) {
      this.pokemonService.getPokemon(i).subscribe(
        a => {
          pokeData = {
            position: i,
            image: a.sprites.front_default,
            name: a.name,


          
          };
          this.data.push(pokeData);
          this.dataSource = new MatTableDataSource<any>(this.data)
          this.dataSource.paginator = this.paginator;

        },

      )
    }

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }

  }
  getRow(row: any) {
    this.router.navigateByUrl(`pDetail/${row.position}`)
  }
}

