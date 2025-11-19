import React from 'react';
import config from '../config';

interface TouchInteraction2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name TouchInteraction2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/touch-interaction2)
 * @see {@link https://clicons.dev/icon/touch-interaction2}
 */
const TouchInteraction2Icon = React.forwardRef<SVGSVGElement, TouchInteraction2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M8.53345 13.6528L10.5 15.3722V6.50065C10.5 5.67186 11.1719 5 12.0006 5C12.8289 5 13.5006 5.67107 13.5013 6.49935L13.5045 11.263L16.1409 11.6903C17.8426 11.9492 18.6935 12.0786 19.2928 12.4427C20.2828 13.0441 21 14 21 15.2657C21 16.1841 20.7762 16.8002 20.232 18.4556C19.8867 19.5059 19.7141 20.0311 19.4326 20.4469C18.9691 21.1313 18.2853 21.6311 17.4984 21.8605C17.0204 21.9999 16.4745 21.9999 15.3826 21.9999H14.4571C13.0054 21.9999 12.2796 21.9999 11.6335 21.7298C11.5176 21.6814 11.4044 21.6267 11.2942 21.566C10.68 21.2278 10.2224 20.6566 9.30698 19.5142L6.3436 15.8158C5.88822 15.2474 5.88518 14.4341 6.3363 13.8622C6.87851 13.175 7.87444 13.08 8.53345 13.6528Z'
    }
  ],
  [
    'path',
    {
      d: 'M7 8H6.17647C4.67907 8 3.93037 8 3.46518 7.56066C3 7.12132 3 6.41421 3 5C3 3.58579 3 2.87868 3.46518 2.43934C3.93037 2 4.67907 2 6.17647 2H17.8235C19.3209 2 20.0696 2 20.5348 2.43934C21 2.87868 21 3.58579 21 5C21 6.41421 21 7.12132 20.5348 7.56066C20.0696 8 19.3209 8 17.8235 8H17'
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

TouchInteraction2Icon.displayName = 'TouchInteraction2Icon';
export default TouchInteraction2Icon;
