import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-p-detail',
  templateUrl: './p-detail.component.html',
  styleUrls: ['./p-detail.component.scss']
})
export class PDetailComponent implements OnInit {

  pokemon:any = '';
  pokemonType= [];
  pokemonImg = '';
  constructor(private pokemonService: PokemonService, private activatedRouter: ActivatedRoute) {
    this.activatedRouter.params.subscribe(
      b=>{
          this.getPokemon(b['id']);
      }
    )
  }

  ngOnInit(): void {
  }
getPokemon(id: number){
  this.pokemonService.getPokemon(id).subscribe(
    r=> {
      this.pokemon = r;
      this.pokemonImg= this.pokemon.sprites.front_default;
      this.pokemonType = r.types[0].type.name;
    }
  )
}
}
