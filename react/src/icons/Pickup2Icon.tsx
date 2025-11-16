import React from 'react';
import config from '../config';

interface Pickup2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Pickup2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/pickup2)
 * @see {@link https://clicons.dev/icon/pickup2}
 */
const Pickup2Icon = React.forwardRef<SVGSVGElement, Pickup2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M18.9997 17.5C20.4239 17.5 21.0627 17.5 21.5153 17.0126C21.5347 16.9917 21.5536 16.9702 21.5721 16.9482C22.0019 16.435 22.0019 15.6275 22.0019 14.0125C22.0019 12.7875 22.0019 12.175 21.7616 11.6578C21.5108 11.1178 21.0586 10.7814 20.1078 10.0931C19.1634 9.40947 18.4919 8.64105 17.8521 7.58239C16.9397 6.07263 16.4834 5.31775 15.7992 4.90888C15.115 4.5 14.308 4.5 12.694 4.5H11.9945M8.99223 17.5H14.9967'
    }
  ],
  [
    'path',
    {
      d: 'M13.9961 4.5L14.7424 7.97979C15.172 9.9834 15.2418 11.5 17.5299 11.5H21.5017'
    }
  ],
  [
    'path',
    {
      d: 'M22.0012 14.5H21.001'
    }
  ],
  [
    'path',
    {
      d: 'M11.9942 4.5V17.5'
    }
  ],
  [
    'path',
    {
      d: 'M16.9986 19.5C18.104 19.5 19.0001 18.6046 19.0001 17.5C19.0001 16.3954 18.104 15.5 16.9986 15.5C15.8932 15.5 14.9971 16.3954 14.9971 17.5C14.9971 18.6046 15.8932 19.5 16.9986 19.5Z'
    }
  ],
  [
    'path',
    {
      d: 'M6.99079 19.5C8.09619 19.5 8.99228 18.6046 8.99228 17.5C8.99228 16.3954 8.09619 15.5 6.99079 15.5C5.8854 15.5 4.9893 16.3954 4.9893 17.5C4.9893 18.6046 5.8854 19.5 6.99079 19.5Z'
    }
  ],
  [
    'path',
    {
      d: 'M11.9892 11.5029H1.9976V16.2136C1.9976 16.5881 2.69011 17.0293 3.31219 17.3231C3.52926 17.4256 3.76738 17.4726 4.00738 17.4793L4.98851 17.5067'
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

Pickup2Icon.displayName = 'Pickup2Icon';
export default Pickup2Icon;
