import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myChef';
  count = 0;
  materials = ['Potato', 'Beef', 'Tomato', 'Egg', 'Fish', 'Eggplant'];
  addedMaterials: string[] = [];
  receipe: Array<any> = [{id: '西红柿炒鸡蛋', food: ['Tomato', 'Egg']}];
  message: string = 'Click button to start cooking';

  getName() {
    return name;
  }

  addMaterials(material) {
    this.addedMaterials.push(material);
    this.count++;
  }

  removeMaterials(material) {
    // tslint:disable-next-line:label-position
    const index: number = this.addedMaterials.indexOf(material);
    if (index !== -1) {
      this.addedMaterials.splice(index, 1);
    }
  }

  checkRecipe() {
    const divElement = document.getElementById('message');

    if (this.addedMaterials.length === 0) {
      divElement.className = 'alert alert-danger';
      this.message = 'The pot is empty, Please add some materials to cook';
      return;
    }

    if (this.addedMaterials.includes('Tomato') && this.addedMaterials.includes('Egg')) {
      if (this.addedMaterials.length > 2) {
        divElement.className = 'alert alert-danger';

        this.message = 'Too many materials. Please remove something not necessary.';
        return;
      }
      divElement.className = 'alert alert-success';

      this.message = 'Good job. You just made "西红柿炒鸡蛋"';
    } else if (this.addedMaterials.includes('Beef') && this.addedMaterials.includes('Potato')) {
      divElement.className = 'alert alert-success';

      this.message = 'Good job. You just made "土豆炖牛肉"';
    } else {
      divElement.className = 'alert alert-danger';

      this.message = 'Oops, it looks not yummy.';
    }
  }

  reset() {
    const divElement = document.getElementById('message');
    divElement.className = 'alert alert-primary';
    this.addedMaterials = [];
    this.message = 'Click button to start cooking';

  }
}
