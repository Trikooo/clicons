import React from 'react';
import config from '../config';

interface Chair5IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Chair5Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/chair5)
 * @see {@link https://clicons.dev/icon/chair5}
 */
const Chair5Icon = React.forwardRef<SVGSVGElement, Chair5IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M8 17L7 22M16 17L17 22'
    }
  ],
  [
    'path',
    {
      d: 'M12 13C10.4783 13 8.86931 13.2925 7.60803 13.6838C6.6583 13.9784 5.89434 15.322 6.01199 16.4128C6.05558 16.8169 6.36877 17 6.69807 17H17.3019C17.6312 17 17.9444 16.8169 17.988 16.4128C18.1057 15.322 17.3417 13.9784 16.392 13.6838C15.1307 13.2925 13.5217 13 12 13Z'
    }
  ],
  [
    'path',
    {
      d: 'M15.7733 14C17.0124 12.4321 18 10.3677 18 8.3553C18 4.30537 15.3137 2 12 2C8.68629 2 6 4.30537 6 8.3553C6 10.3677 6.98759 12.4321 8.22668 14'
    }
  ],
  [
    'path',
    {
      d: 'M13.6698 2C13.8785 3.13257 14 4.56789 14 6.2739C14 8.69303 13.6362 11.178 13.1937 13M10.3302 2C10.1215 3.13257 10 4.56789 10 6.2739C10 8.69303 10.3638 11.178 10.8063 13'
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

Chair5Icon.displayName = 'Chair5Icon';
export default Chair5Icon;
