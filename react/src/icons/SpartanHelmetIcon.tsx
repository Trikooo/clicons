import React from 'react';
import config from '../config';

interface SpartanHelmetIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name SpartanHelmetIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/spartan-helmet)
 * @see {@link https://clicons.dev/icon/spartan-helmet}
 */
const SpartanHelmetIcon = React.forwardRef<SVGSVGElement, SpartanHelmetIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M4.53767 15.0937C2.8878 8.60966 5.99612 4.5631 12.0003 2C18.0046 4.5631 21.1122 8.60966 19.4623 15.0937C19.3427 15.5637 19.3575 16.063 19.5336 16.514L20.9095 20.038C21.4448 21.409 19.4664 21.7351 18.6252 21.9121C16.3106 22.3991 14.0668 20.8106 13.693 18.4203C13.4291 16.7328 14.3833 16.4559 15.6306 15.817C15.6306 15.817 17.1867 15.2855 17.1867 13.6913C17.1867 12.5173 16.2578 11.5656 15.1119 11.5656C14.3943 11.5656 13.7621 11.774 13.135 12.4517C12.5272 13.1086 12.2234 13.437 12.0004 13.437C11.7774 13.437 11.4734 13.1086 10.8656 12.4518C10.2382 11.774 9.60571 11.5656 8.88813 11.5656C7.74224 11.5656 6.81332 12.5173 6.81332 13.6913C6.81332 15.2855 8.36942 15.817 8.36942 15.817C9.61674 16.4559 10.5709 16.7328 10.307 18.4203C9.93315 20.8106 7.6894 22.3991 5.37484 21.9121C4.53362 21.7351 2.55521 21.409 3.09051 20.038L4.46636 16.514C4.64246 16.063 4.65729 15.5637 4.53767 15.0937Z'
    }
  ],
  [
    'path',
    {
      d: 'M10 20H14'
    }
  ],
  [
    'path',
    {
      d: 'M11.9998 8H12.0088'
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

SpartanHelmetIcon.displayName = 'SpartanHelmetIcon';
export default SpartanHelmetIcon;
