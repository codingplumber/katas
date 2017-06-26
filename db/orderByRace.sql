select count(race) as c from demographics
group by race
order by c desc;

create if not exists races
(
  race text,
  count integer
);

insert into races
  (race, count)
values
  (race, c);
