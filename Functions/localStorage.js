function getId(key) {
  const keyName = key + "_id";
  let id = localStorage.getItem(keyName);
  if (null === id) {
    id = 0;
  } else {
    id = parseInt(id);
  }
  id++;
  localStorage.setItem(keyName, id);
  return id;
}

function readData(key) {
  const data = localStorage.getItem(key);
  if (null === data) {
    localStorage.setItem(key, JSON.stringify([]));
    return [];
  }
  return JSON.parse(data);
}

function writeData(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

// CRUD f-jos:

export function create(key, data) {
  const thing = readData(key);
  data.id = getId(key);
  thing.push(data);
  writeData(key, thing);
}

export function read(key) {
  return readData(key);
}

export function update(key, data, id) {
  const thing = readData(key);
  writeData(
    key,
    thing.map((t) => (t.id === id ? { ...t, ...data, id: id } : { ...t }))
  );
}

export function destroy(key, id) {
  const thing = readData(key);
  writeData(
    key,
    thing.filter((t) => t.id !== id)
  );
}
