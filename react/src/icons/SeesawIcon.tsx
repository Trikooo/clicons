import React from 'react';
import config from '../config';

interface SeesawIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name SeesawIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/seesaw)
 * @see {@link https://clicons.dev/icon/seesaw}
 */
const SeesawIcon = React.forwardRef<SVGSVGElement, SeesawIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M8 17H16'
    }
  ],
  [
    'path',
    {
      d: 'M13.5 17V12M10.5 13V17'
    }
  ],
  [
    'path',
    {
      d: 'M15.9036 5.63607L17.3268 5.3184M17.3268 5.3184L18.75 5.00073M17.3268 5.3184L17.9839 8.07033M3.56943 8.38917L4.9926 8.07151M4.9926 8.07151L6.41578 7.75384M4.9926 8.07151L5.64974 10.8234M2.56619 11.5117L21.0675 7.38205C21.4605 7.29433 21.8526 7.53124 21.9434 7.9112C22.2156 9.05108 21.4804 10.1885 20.3014 10.4516L4.6465 13.946C3.4675 14.2091 2.29107 13.4984 2.01888 12.3585C1.92815 11.9786 2.17319 11.5994 2.56619 11.5117Z'
    }
  ]
];

    const renderElement = (item: any, index: number): React.ReactElement => {
      const tag = item[0];
      const attrs = item[1];
      const children = item[2];
      const Element = tag as any;

      const processedAttrs: any = { ...attrs };

      // Apply color and stroke properties to shape elements
      const isShapeElement = ['path', 'circle', 'rect', 'line', 'polyline', 'polygon', 'ellipse'].includes(tag);

      if (isShapeElement) {
        if (!processedAttrs.stroke) processedAttrs.stroke = finalColor;
        if (!processedAttrs.fill) processedAttrs.fill = 'none';

        if (!processedAttrs.strokeWidth) {
          processedAttrs.strokeWidth = finalAbsoluteStrokeWidth
            ? finalStrokeWidth
            : finalStrokeWidth * (finalSize / 24);
        }
        if (!processedAttrs.strokeLinecap) processedAttrs.strokeLinecap = 'round';
        if (!processedAttrs.strokeLinejoin) processedAttrs.strokeLinejoin = 'round';
      }

      // Handle nested elements
      if (children) {
        if (Array.isArray(children)) {
          return <Element key={index} {...processedAttrs}>{children.map(renderElement)}</Element>;
        } else if (typeof children === 'string') {
          return <Element key={index} {...processedAttrs}>{children}</Element>;
        }
      }

      return <Element key={index} {...processedAttrs} />;
    };

    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={finalSize}
        height={finalSize}
        viewBox="0 0 24 24"
        fill="none"
        className={className}
        {...rest}
      >
        {iconData.map(renderElement)}
      </svg>
    );
  }
);

SeesawIcon.displayName = 'SeesawIcon';
export default SeesawIcon;
