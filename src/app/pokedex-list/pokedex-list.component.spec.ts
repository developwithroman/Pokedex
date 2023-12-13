import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { PokemonService } from '../pokemon.service';
import { PokedexListComponent } from './pokedex-list.component';

describe('PokedexListComponent', () => {
  let component: PokedexListComponent;
  let fixture: ComponentFixture<PokedexListComponent>;
  let activatedRoute: ActivatedRoute;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokedexListComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PokedexListComponent);
    component = fixture.componentInstance;
    activatedRoute = TestBed.inject(ActivatedRoute);
    router = TestBed.inject(Router);

    // Set up route parameters if needed
    activatedRoute.snapshot.params = { id: '1' }; // Mock route params

    // Navigate to the component or trigger route events
    router.initialNavigation();

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch pokemon list on ngOnInit', () => {
    const pokemonService = TestBed.inject(PokemonService);
    spyOn(pokemonService, 'getPokemonList').and.callThrough();

    component.ngOnInit();

    expect(pokemonService.getPokemonList).toHaveBeenCalled();
  });
});
